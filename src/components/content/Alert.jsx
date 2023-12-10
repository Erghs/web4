import React from 'react'

export default function Alert(props) {
    const classNames = `alert ${props.style}`;
  return (
    <div className ={classNames} role="alert">
    {props.text}
    </div>
  )
}
