

const User = require('../schema/userSchema');
const List = require('../schema/todoSchema');
const bcrypt = require('bcrypt');

const saltRounds = 10;

// sign in
const registerUser = async(req, res) => {
    try{
        const {username, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const data = {
            username,
            email, 
            password : hashedPassword
        }
        const user =  new User(data);
        await user.save().then(() => {
            res.status(200).json({msg : user});
        });
    }
    catch(error){
        res.status(400).json({error : `User already exists or ${error}`});
    }
}

// Login User
const loginUser = async(req, res) => {
    try{
        // const {email, entered} = req.body;
        const user = await User.findOne({email : req.body.email });

        if(!user){
            res.status(404).json({msg : "Invalid Email ID"});
            return;
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            res.status(404).json({msg : "Invalid Password"});
            return;
        }
        const { password , ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(error){
        res.status(400).json({error : `${error}`});
    }
}


module.exports = {
    registerUser, 
    loginUser
}