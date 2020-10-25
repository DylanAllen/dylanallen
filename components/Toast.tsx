import React, { useState, useEffect } from "react";

const Toast = ({message, color}: {message?: string, color?: string}) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      },5000)
    }
  },[message])

  return (
    <div className={"toastContainer " + color}>
      <div 
        className={`toastMessage ${(show && message) ? 'show' : 'hide' }`}
        style={(color) ? {backgroundColor: color} : {}}
      >
        {(message) ? message : ''}
      </div>
    </div>
  )
}

export default Toast;
