
const express = require('express');

const router = express.Router();

const {
    registerUser,
    loginUser
} = require('../controller/userController.js');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

const {
    addTask,
    updateTask,
    deleteTask,
    getTask
} = require('../controller/taskController.js');

router.route('/addTask').post(addTask);
router.route('/updateTask/:id').put(updateTask);
router.route('/deleteTask/:task_id').delete(deleteTask);
router.route('/getTask/:user_id').get(getTask);


module.exports = router;