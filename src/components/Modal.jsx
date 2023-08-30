import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'


const Modal = ({data, setModal}) => {
  return (
    <div className='modal'>
      <AiOutlineCloseCircle fill='#a93945' size='30px' onClick={()=>{setModal(false)}}/>

      <input type="text"  defaultValue={data.todo} />
    
    <button className='button-edit'>Editar</button>

    </div>
  )
}

export default Modal