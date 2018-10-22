import React from 'react'
import propTypes from 'prop-types'

const RedButton = (props) => {
  return (
    <button onClick={props.onClick} style={{
      backgroundColor: 'red',
      borderRadius: '5px',
      outline: 'none',
      color: "#FFF",
      padding: '.4rem .7rem',
      fontWeight: 600,
      cursor: 'pointer'
    }}>{props.buttonText}</button>
  )
}

RedButton.propTypes = {
  buttonText: propTypes.string.isRequired,
  onClick: propTypes.func
}

export default RedButton