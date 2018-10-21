import React, { Component } from 'react'
import LandingpageHeader from '../../components/header/landingpageHeader'
import Footer from '../../components/footer/Footer'

class Guru extends Component {
  constructor(props) {
    super(props)
  }

  renderCoursePlacesToDivs(coursePlaces) {

  }

  renderStudentsToDivs(students) {

  }

  render() {
    return (
      <React.Fragment>
        <LandingpageHeader />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laborum nemo vero? Expedita, perspiciatis! Ipsum consequatur incidunt, nihil voluptates eveniet nobis dolorem fuga enim error, nostrum aperiam veniam saepe recusandae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque corrupti voluptate blanditiis quidem, distinctio a consectetur facilis magni, provident officia! Aspernatur eum saepe veniam quos, harum officiis eaque maxime?
        </div>
        <section>
          <h1 style={{ color: '#289ad6' }}>Tempat Les</h1>
          <div style={{ backgroundColor: '#289ad6', display: 'flex', flexWrap: 'wrap', padding: '1.4rem' }}>
            <div style={{ backgroundColor: '#FFF', padding: '.6rem', width: '400px', borderRadius: '5px' }}>
              <h2>Sutomo Budi</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nam ea amet provident exercitationem rerum ut reprehenderit sapiente facilis! Doloremque quod praesentium ad hic vitae rem odio sed, tempore incidunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis culpa modi nam tenetur quisquam veniam velit magnam fuga sed, aliquam deleniti voluptatum repellendus cumque distinctio quo labore quidem consequuntur.
              </p>
              <button>adwada</button>
              <button>adawdwa</button>
            </div>
          </div>
        </section>
        <section>
          <h1 style={{ textAlign: 'right', color: '#289ad6' }}>Murid</h1>
          <div style={{ backgroundColor: '#289ad6', display: 'flex', flexWrap: 'wrap' }}>

          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Guru