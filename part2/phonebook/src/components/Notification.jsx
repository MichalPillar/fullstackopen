import React from 'react';

const Notification = ({ message, success }) => {
  const successStyle = {
    background: 'lightgrey',
    color: 'green',
    borderRadius: '5px',
    borderColor: 'green',
    borderStyle: 'solid',
    padding: '10px',
    fontStyle: 'bold',
    borderWidth: '5px',
    fontSize: '18px',
    marginBottom: '10px'
  }

  const errorStyle = {
    ...successStyle,
    color: 'red',
    borderColor: 'red'
  }

  if (message === null) {
    return null
  }

  return (
    <div style={success ? successStyle : errorStyle}>
      {message}
    </div>
  )
}

export default Notification;