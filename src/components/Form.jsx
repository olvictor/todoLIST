import React from 'react'

const Form = ({setTodos}) => {
  return (
    <form>
        <input type="text" placeholder='Digite sua tarefa'/>
        <button>Submit</button>
    </form>
  )
}

export default Form