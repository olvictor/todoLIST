import React, { useState } from 'react'


const Form = ({todos,setTodos}) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) =>{

    e.preventDefault();

    const todoObj = {
      task,
      done: false
    }
    setTodos([...todos, todoObj])

    try{
      await fetch('http://localhost:8000/todos',{
        method:'POST',
        body: JSON.stringify(todoObj),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
    }
    catch(erro){
      console.log(erro)
    }
    setTask("")
  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite sua tarefa' onChange={({target})=>{setTask(target.value)}} value={todo || ''}/>
        <button>Registrar</button>
    </form>
  )
}

export default Form