import React, { Component } from 'react'
import { apiCall } from '../../services/api'
import BlueButton from '../buttons/BlueButton'
import dummyStudentImg from '../../assets/img/steve_jobs_PNG2.png'
import Proptypes from 'prop-types'

class TeachersGrid extends Component {
  constructor(props) {
    super(props);
  }

  renderTeachersToDivs(teachers) {
    if (teachers) {
      return teachers.map(teacher => (
        <div style={{ backgroundColor: '#FFF', padding: '.6rem', width: '400px', borderRadius: '5px', margin: '5px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
              <img src={dummyStudentImg} alt="" width="100" />
            </div>
            <div>
              <h2>{teacher.name}</h2>
              <BlueButton
                buttonText="See More" />
            </div>
          </div>
        </div>
      ))
    }
  }

  render() {
    const { teachers } = this.props
    return (
      <React.Fragment>
        <section style={{ marginTop: '5rem' }}>
          <h1 style={{ textAlign: 'right', color: '#289ad6' }}>{this.props.title}</h1>
          <div style={{ backgroundColor: '#289ad6', display: 'flex', flexWrap: 'wrap', padding: '1.4rem', boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }}>
            {teachers &&
              this.renderTeachersToDivs(teachers)
            }
          </div>
        </section>
      </React.Fragment>
    )
  }
}

TeachersGrid.propTypes = {
  title: Proptypes.string.isRequired,
  teachers: Proptypes.array.isRequired
}

export default TeachersGrid