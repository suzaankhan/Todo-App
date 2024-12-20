
import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const moveToTodo = () => {
    navigate('/todo');
  }

  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-center'>Organize your <br />work and life, finally.</h1>
        <p className='text-center'>Manage your tasks efficiently with intuitive <br /> features like add, update, and delete, all in one place</p>
        <button className='home-btn btn btn-danger' role="button"
        onClick={moveToTodo}>Make Todo List</button>
      </div>
    </div>
  )
}

export default Home
