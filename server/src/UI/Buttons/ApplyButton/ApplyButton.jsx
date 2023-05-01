import classes from './ApplyButton.module.css'

import React from 'react'

const ApplyButton = ({ clss, children, ...props }) => {
    
    return (
        <button {...props}  className={[classes.myBtn, clss].join(' ')} >
            {children}
        </button>
    )
}
export default ApplyButton