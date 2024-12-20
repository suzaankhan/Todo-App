
const User = require('../schema/userSchema');
const List = require('../schema/todoSchema');

const addTask = async(req, res) => {
    try{
        const {title, body, email} = req.body;
        // check is user exists
        const existingUser = await User.findOne({email : email});

        if(existingUser){
            // if user exits then only we will store todo
            const list = new List({
                title : title,
                body : body,
                user : existingUser
            });
            await list.save().then(() => {
                return res.status(200).json(list);
            });
            existingUser.list.push(list);
            existingUser.save();
        }
    }
    catch(error){
        res.status(404).json({error : `${error}`});
    }
}

// update
const updateTask = async(req, res) => {
    try{
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser){
            const list = await List.findByIdAndUpdate(req.params.id, {title : title, body : body});
            list.save().then(() => {
                res.status(200).json({msg : "Task updated"});
            });
        }
    }
    catch(error){
        res.status(404).json({error : `${error}`});
    }
}

// delete
const deleteTask = async(req, res) => {
    try{
        const {email} = req.body;
        const existingUser = await User.findOneAndUpdate({ email }, {$pull : {list : req.params.task_id}});
        if(existingUser){
            await List.findByIdAndDelete(req.params.task_id ).
            then(() => {
                res.status(200).json({msg : "Task Deleted"});
            })
        }
        throw new Error("User does not exists");
    }
    catch(error){
        res.status(404).json({error : `${error}`});
    }
}

// get tasks
const getTask = async(req, res) => {
    try{
        const list = await List.find({user : req.params.user_id}).sort({createdAt : -1});  // descending order
        if(list.length !== 0){
            return res.status(200).json(list);
        }
        else{
            res.status(200).json({msg : `No task created`});
        }
    }
    catch(error){
        res.status(400).json({msg : `${error}`});
    }
}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    getTask
}