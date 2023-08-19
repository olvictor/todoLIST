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


  const handleCheck = (e) =>{
    console.log(e)
  }

  return (
    <>
    <motion.h1 animate={{scale: [1.25,2,1.5,1]}}>TODOLIST</motion.h1>
    <Form setTodos={setTodos}/>
    <motion.div
      style={{
        width:400,
        height:'auto',
        borderRadius:10,
        backgroundColor: "rgba(255,255,255,0.5)",
        position:'relative',
        padding: '20px'
      }}
    ref={constraintsRef}
    >
      {todos && todos.map((todo)=>(
        <motion.li key={todo.id} drag dragControls={controls} dragConstraints={constraintsRef} style={{width:'30%',backgroundColor:'red'}}>
        <div style={{display:'flex',height:'20px',alignItems:'center',gap:'6px',textAlign:'center'}}>
          <input type="checkbox" checked={checked} onChange={handleCheck}/>
          <p>{todo.todo}</p>
          <AiFillPlusCircle />
        </div> 
        <FiEdit />
        <BsTrash/>
      </motion.li>
      ))}
    </motion.div>
    </>
  )
}

export default App
