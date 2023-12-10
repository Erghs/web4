import React from 'react'

export default function Button(props) {
    const classNames = `btn ${props.type}`;
  return (
      <div>
    <button type="button" className={classNames}>{props.text}</button>
    </div>
  )

}
