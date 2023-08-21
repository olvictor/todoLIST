import React, { useState } from 'react'
import { TODO_POST } from '../../useFetch.js'


const Form = ({setTodos}) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const todoObj = {
      todo,
      done: false
    }
    const { url, options} = TODO_POST(todoObj)

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

    setTodo("")
  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite sua tarefa' onChange={({target})=>{setTodo(target.value)}} value={todo || ''}/>
        <button>Registrar</button>
    </form>
  )
}

export default Form