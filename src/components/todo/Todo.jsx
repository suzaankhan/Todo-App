import React, { useState } from "react";
import "./todo.css";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../../context";

const Todo = () => {

    const {isLogin, email, username } = useGlobalContext();
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const todoSubmit = () => {
    const { title, body } = inputs;
    if (title.length === 0 || body.length === 0) {
      toast.error("Title and body cannot be empty");
      return;
    }
    if(!isLogin){
        setArray((prev) => [...prev, inputs]);
        setInputs({ title: "", body: "" });
        // console.log(array);
        toast.success("Task added");
        toast.error("Task not saved please login first");
    }
    else{
        // user is logged in
        setArray((prev) => [...prev, inputs]);
        setInputs({ title: "", body: "" });
        // console.log(array);
        toast.success("Task added");
    }
  };

  return (
    <div className="top-todo">
      <div className="todo-main  container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column todo-inputs-div col-12 col-lg-6 p-1">
          <input
            type="text"
            name="title"
            placeholder="TITLE"
            className="my-2 p-2 todo-inputs"
            onClick={show}
            onChange={change}
            value={inputs.title}
          />
          <textarea
            id="textarea"
            type="text"
            name="body"
            placeholder="BODY"
            className=" p-2 todo-inputs"
            onChange={change}
            value={inputs.body}
          />
        </div>
        <div className="w-50 d-flex justify-content-end add-btn-div">
          <button
            className="btn btn-danger my-3 px-3 add-btn"
            onClick={todoSubmit}
          >
            Add
          </button>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
      <div className="todo-body">
        <div className="container-fluid pb-5 todo-body-2">
          <div className="row">
            {array && //col-8 for responsiveness
              array.map((item, index) => (
                <div className="col-lg-3 col-9 mx-5 my-2 todo-card-container">
                  <TodoCard item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
