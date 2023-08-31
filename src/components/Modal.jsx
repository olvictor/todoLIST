import React, { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'


const Modal = ({data, setModal,todos,setTodos}) => {
  const [editTodo,setEditTodo] = useState('')


  const submitEdit = async () =>{
    const todoEncontrado = todos.find((todo)=> todo.id === data.id)
    todoEncontrado.todo = editTodo
    setTodos(todos)
    
      await fetch(`http://localhost:8000/todos/${data.id}`,{
        method:'PATCH',
        body: JSON.stringify({
          todo: editTodo
        }),
          headers: {
            'Content-Type' : 'application/json'
        }
      })

      setModal(false)
  }

  return (
    <div className='modal'>
      <AiOutlineCloseCircle fill='#a93945' size='30px' onClick={()=>{setModal(false)}}/>

      <input type="text"  defaultValue={data.todo} onChange={(e)=>setEditTodo(e.target.value)}/>
    
     <button className='button-edit' onClick={submitEdit}>Editar</button>

    </div>
  )
}

export default Modal