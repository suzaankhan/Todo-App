
const mongooose = require('mongoose');

const url = 'mongodb://127.0.0.1/todo-list-database'

const connectDB = () => {
    try{
        return mongooose.connect(url, {})
        .then(() => {console.log("Connected to database")})
        .catch((error) => {console.log('connection to database failed' + error)})
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;
