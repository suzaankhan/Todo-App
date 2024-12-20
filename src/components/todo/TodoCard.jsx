
import React from 'react'
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoCard = (props) => {
  return (
    <div className='p-3 todo-card'>
      {/* <p>Title : {props.item.title} Body : {props.item.body}</p> */}
      <div className="">
        <h5>{props.item.title}</h5>
        <p>{props.item.body.split("", 77)}</p>
        {/* <button className='btn bg-danger mx-1'>Update</button> */}
      </div>
        {/* <button className='btn bg-danger mx-1'>Completed</button> */}
        <div className='d-flex justify-content-around'>
            <div title='update' className='icon' >
                <GrDocumentUpdate className='card-icons upd'/>Update
            </div>
            <div title='delete' className='icon'>
                <RiDeleteBin6Line className='card-icons del'/> Delete
            </div>
        </div>
    </div>
  )
}

export default TodoCard
