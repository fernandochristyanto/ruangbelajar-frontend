import React from 'react'
import propTypes from 'prop-types'

const BlueButton = (props) => {
  return (
    <button onClick={props.onClick} style={{
      backgroundColor: '#289ad6',
      borderRadius: '5px',
      outline: 'none',
      color: "#FFF",
      padding: '.4rem .7rem',
      fontWeight: 600,
      cursor: 'pointer'
    }}>{props.buttonText}</button>
  )
}

BlueButton.propTypes = {
  buttonText: propTypes.string.isRequired,
  onClick: propTypes.func
}

export default BlueButton