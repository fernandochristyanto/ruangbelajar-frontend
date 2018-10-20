import React from 'react'

const classes = {

}
const LandingpageHeader = (props) => {
  return (
    <React.Fragment>
      <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#289ad6', padding: '.6rem' }}>
        <div>
          <span style={{ fontWeight: 900, color: '#FFF' }}>Logo</span>
        </div>
        <div>
          <button style={{marginRight: '.4rem'}}>Daftar</button>
          <button>Masuk</button>
        </div>
      </header>
    </React.Fragment>
  )
}

export default LandingpageHeader