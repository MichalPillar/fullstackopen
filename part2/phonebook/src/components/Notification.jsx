import React from 'react';

const Notification = ({ message }) => {
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

  if (message === null) {
    return null
  }

  return (
    <div style={successStyle}>
      {message}
    </div>
  )
}

export default Notification;