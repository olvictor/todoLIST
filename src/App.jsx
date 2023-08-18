import { useState } from 'react'
import { motion, useDragControls  } from 'framer-motion'
import { useRef } from 'react'
import {BsTrash} from 'react-icons/bs'
import {AiFillPlusCircle} from 'react-icons/ai'
import './App.css'
import Form from './components/form'
function App() {
  const controls = useDragControls()
  const constraintsRef = useRef(null);


  const [todos, setTodos] = useState([])

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
      <motion.li drag dragControls={controls} dragConstraints={constraintsRef} style={{width:'30%',backgroundColor:'red'}}>
        <div style={{display:'flex',height:'20px',alignItems:'center',gap:'6px',textAlign:'center'}}>
          <input type="checkbox" name="" id="" />
          <p>aa</p>
          <AiFillPlusCircle />
        </div> <BsTrash/>
      </motion.li>
      <motion.li drag dragControls={controls} dragConstraints={constraintsRef} style={{width:'30%',backgroundColor:'red'}}>aa</motion.li>
      <motion.li drag dragControls={controls} dragConstraints={constraintsRef} style={{width:'30%',backgroundColor:'red'}}>aa</motion.li>

    </motion.div>
    </>
  )
}

export default App
