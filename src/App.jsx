import { useState } from 'react'
import { motion  } from 'framer-motion'
import './App.css'
import Form from './components/form'
function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
    <Form />
    <motion.div
      style={{
        width:400,
        height:'auto',
        borderRadius:10,
        backgroundColor: "rgba(255,255,255,0.5)",
        position:'relative',
        padding: '20px'
      }}
      animate={{scale: [1.25,2,1.5,1]}}
    >
      <motion.li>aa</motion.li>
      <motion.li>bb</motion.li>
      <motion.li>cc</motion.li>
      <motion.li>dd</motion.li>
      <motion.li>ee</motion.li>
      <motion.li>aa</motion.li>

    </motion.div>
    </>
  )
}

export default App
