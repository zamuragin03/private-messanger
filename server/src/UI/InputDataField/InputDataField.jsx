import React from 'react'
import cl from './InputDataField.module.css'
const InputDataField = ({cls,children,...props}) => {
  return (
    <input {...props} className={[cl.Input, cls].join(' ')}>
        {children}
    </input>
  )
}

export default InputDataField