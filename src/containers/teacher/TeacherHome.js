import React, { Component } from 'react'
import LandingpageHeader from '../../components/header/landingpageHeader'
import Footer from '../../components/footer/Footer'
import { apiCall } from '../../services/api';
import dummyStudentImg from '../../assets/img/steve_jobs_PNG2.png'
import dummyCoursePlaceImg from '../../assets/img/3-3.jpg'

import BlueButton from '../../components/buttons/BlueButton'

class TeacherHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coursePlaces: undefined,
      students: undefined
    }
  }

  renderBanner(){
    
  }

  renderCoursePlacesToDivs(coursePlaces) {
    if (coursePlaces) {
      return coursePlaces.map(coursePlace => (
        <div style={{ backgroundColor: '#FFF', padding: '.6rem', width: '400px', borderRadius: '5px', margin: '5px' }}>
          <h2>{coursePlace.name}</h2>
          <img src={dummyCoursePlaceImg} width="300" alt="" />
          <p style={{ color: '#289ad6' }}>{coursePlace.description.length > 50 ? coursePlace.description.substr(0, 200) + "....." : coursePlace.description}
          </p>
          <BlueButton
            buttonText="See More"
            onClick={() => this.props.history.push(`cp/${coursePlace._id}`)} />
        </div>
      ))
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
    return (
      <React.Fragment>
        <div style={{ padding: '2rem 2rem' }}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laborum nemo vero? Expedita, perspiciatis! Ipsum consequatur incidunt, nihil voluptates eveniet nobis dolorem fuga enim error, nostrum aperiam veniam saepe recusandae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque corrupti voluptate blanditiis quidem, distinctio a consectetur facilis magni, provident officia! Aspernatur eum saepe veniam quos, harum officiis eaque maxime?
          </div>
          <section>
            <h1 style={{ color: '#289ad6' }}>Tempat Les</h1>
            <div style={{ backgroundColor: '#289ad6', display: 'flex', flexWrap: 'wrap', padding: '1.4rem' }}>
              {this.state.coursePlaces &&
                this.renderCoursePlacesToDivs(this.state.coursePlaces)
              }
            </div>
          </section>
          <section>
            <h1 style={{ textAlign: 'right', color: '#289ad6' }}>Murid</h1>
            <div style={{ backgroundColor: '#289ad6', display: 'flex', flexWrap: 'wrap', padding: '1.4rem' }}>
              {this.state.students &&
                this.renderStudentsToDivs(this.state.students)
              }
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }

  componentWillMount() {
    apiCall('get', '/api/coursePlace')
      .then(res => {
        this.setState({ ...this.state, coursePlaces: res })
      })
    apiCall('get', '/api/user/getAllByRole?role=student')
      .then(res => {
        this.setState({ ...this.state, students: res })
      })
  }
}

export default TeacherHome