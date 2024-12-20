

const express = require('express');
const cors = require('cors');
const connectDB = require("./db/connect.js");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({hello : "hello bhaiya"});
})

const user_routes = require('./routes/router.js');

// REST API ROUTING
app.use('/api/user', user_routes);

const start = async() => {
    try{
        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`);
        });
        await connectDB();
    }
    catch(err){
        console.log(err);
    }
}

start();