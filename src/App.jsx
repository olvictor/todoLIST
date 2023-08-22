import { useEffect, useState } from 'react'
import { motion, useDragControls  } from 'framer-motion'
import { useRef } from 'react'
import {BsTrash} from 'react-icons/bs'
import {AiFillPlusCircle} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

import './App.css'
import Form from './components/form'
function App() {
  const controls = useDragControls()
  const constraintsRef = useRef(null);


  const [todos, setTodos] = useState([])
  const [checked, setChecked] = useState(false)
  
  useEffect(()=>{
   const getTodos = async () =>{
    const getarrayTodos = await fetch('http://localhost:8000/todos')
    const arrayJSON = await getarrayTodos.json()
    setTodos(arrayJSON)
   }
   getTodos()


  },[])


  const handleCheck = async (todo) =>{
    const id = todo.id
    todo.done = !todo.done

    const editTodo = await fetch(`http://localhost:8000/todos/${id}/checked`,{
      method:'PATCH',
      body: JSON.stringify(todo.done),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  }

  return (
    <section>
    <motion.h1 animate={{scale: [1.25,2,1.5,1]}}>TODOLIST</motion.h1>
    <Form setTodos={setTodos}/>
    <motion.div
      style={{
        width:'80vw',
        height:'auto',
        borderRadius:10,
        backgroundColor: "rgba(255,255,255,0.5)",
        position:'relative',
        padding: '20px'
      }}
    ref={constraintsRef}
    >
      {todos && todos.map((todo)=>(
        <motion.li key={todo.id} drag dragControls={controls} dragConstraints={constraintsRef} style={{width:'40%',backgroundColor:'red',opacity:'0.8',borderRadius:'6px'}}>
        <div style={{display:'flex',height:'20px',alignItems:'center',gap:'6px',textAlign:'center'}}>
          <input type="checkbox" checked={todo.done} onChange={()=>handleCheck(todo)}/>
          <p>{todo.todo}</p>
          <AiFillPlusCircle />
        </div> 
        <FiEdit />
        <BsTrash/>
      </motion.li>
      ))}
      {todos.length === 0 && <p>Não há tarefas registradas</p>}
    </motion.div>
    </section>
  )
}

export default App
