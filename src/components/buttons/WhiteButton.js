import React from 'react'
import propTypes from 'prop-types'

const WhiteButton = (props) => {
  return (
    <button onClick={props.onClick} style={{
      backgroundColor: '#FFF',
      borderRadius: '5px',
      outline: 'none',
      color: "#289ad6",
      padding: '.4rem .7rem',
      fontWeight: 600,
      cursor: 'pointer',
      ...props.style
    }}>{props.buttonText}</button>
  )
}

WhiteButton.propTypes = {
  buttonText: propTypes.string.isRequired,
  onClick: propTypes.func,
  style: propTypes.object
}

export default WhiteButton