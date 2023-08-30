import { useEffect, useState } from 'react'
import { motion, useDragControls  } from 'framer-motion'
import { useRef } from 'react'
import {BsTrash} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'
import './App.css'
import Form from './components/form'
import Modal from './components/Modal'


function App() {
  const controls = useDragControls()
  const constraintsRef = useRef(null);


  const [todos, setTodos] = useState([])
  const [checked, setChecked] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState(null)
  const todosIncompletos = todos.filter((todo)=> todo.done === false);
  const todosCompletos =  todos.filter((todo)=> todo.done === true);

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
    setChecked(!checked)
    todo.done = checked

    

    const editTodo = await fetch(`http://localhost:8000/todos/${id}/checked`,{
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
  }


  const handleDelete = async(id) =>{
    const newTodos = todos.filter((todo) => todo.id !== id)
   
    setTodos(newTodos)

    await fetch(`http://localhost:8000/todos/${id}`,{
      method: 'DELETE'
    })
  }

  const openModal = (todo) => {
    setModalData(todo)
  }
  return (
    <section>
      <motion.h1 animate={{scale: [1.25,2,1.5,1]}}>TODOLIST</motion.h1>
      <div>
        <h2>Restam {todosIncompletos.length} de {todos.length} tarefas.</h2>
      </div>
      <Form setTodos={setTodos} todos={todos}/>
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
          <motion.li key={todo.id} drag dragControls={controls} dragConstraints={constraintsRef} style={{width:'30%',backgroundColor:'#fff',opacity:'0.8',borderRadius:'6px',color:'#FFA500',display:'flex'}}>
          <div style={{display:'flex',height:'20px',alignItems:'center',gap:'6px',textAlign:'center'}}>
            <input type="checkbox" checked={todo.done} onChange={()=>handleCheck(todo)}/>
            <p style={{textDecoration: todo.done === true ? 'line-through' : '' }}>{todo.todo}</p>
          </div> 
          <div style={{display:'flex',gap:'10px'}}>
            <FiEdit onClick={()=> {
            setModal(true)
            openModal(todo)
            }}/>
            <BsTrash onClick={()=> handleDelete(todo.id)}/>
          </div>
        </motion.li>
        ))}
        {modal === true && <Modal data={modalData} setModal={setModal} />}
        {todos.length === 0 && <p>Não há tarefas registradas</p>}
      </motion.div>
    </section>
  )
}

export default App
