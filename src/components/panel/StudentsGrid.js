import React, { Component } from 'react'
import { apiCall } from '../../services/api'
import BlueButton from '../buttons/BlueButton'
import dummyStudentImg from '../../assets/img/steve_jobs_PNG2.png'

class StudentsGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: undefined
    }
  }

  renderStudentsToDivs(students) {
    if (students) {
      return students.map(student => (
        <div style={{ backgroundColor: '#FFF', padding: '.6rem', width: '400px', borderRadius: '5px', margin: '5px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
              <img src={dummyStudentImg} alt="" width="100" />
            </div>
            <div>
              <h2>{student.name}</h2>
              <BlueButton
                buttonText="See More" />
            </div>
          </div>
        </div>
      ))
    }
  }

  render() {
    const { students } = this.state
    return (
      <React.Fragment>
        <section style={{ marginTop: '5rem' }}>
          <h1 style={{ textAlign: 'right', color: '#289ad6' }}>Murid</h1>
          <div style={{ backgroundColor: '#289ad6', display: 'flex', flexWrap: 'wrap', padding: '1.4rem', boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }}>
            {students &&
              this.renderStudentsToDivs(students)
            }
          </div>
        </section>
      </React.Fragment>
    )
  }

  componentDidMount = () => {
    apiCall('get', `/api/user/getAllByRole?role=student`)
      .then(res => {
        this.setState({ ...this.state, students: res })
      })
      .catch(err => {
        console.log(err)
      })
  }

}

export default StudentsGrid