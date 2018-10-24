import React, { Component } from 'react'
import { apiCall } from '../../services/api'
import { withRouter } from 'react-router-dom'
import dummyImg from '../../assets/img/3-3.jpg'
import RedButton from '../../components/buttons/RedButton'
import { connect } from 'react-redux'
import BlueButton from '../../components/buttons/BlueButton';

class CourseplaceDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courseplace: undefined
    }
  }

  renderWanting() {
    if (this.state.courseplace.wanting.length == 0)
      return (<p>N/A</p>)
    else
      return (
        <ol>
          {this.state.courseplace.wanting.map((want, idx) => (
            <li key={idx}>{want}</li>
          ))}
        </ol>
      )
  }

  applyToCoursePlace = (event) => {
    event.preventDefault()
    const { user } = this.props
    const { courseplaceId } = this.props.match.params;
    apiCall('post', '/api/courseplace/apply', {
      courseplaceId: courseplaceId,
      teacherId: user.id
    })
      .then(res => {
        const { courseplace } = this.state
        let courseplaceCopy = { ...courseplace }
        courseplaceCopy.interestedTeachers = [...courseplace.interestedTeachers, user.id]
        this.setState({ ...this.state, courseplace: courseplaceCopy })
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderStars(max) {
    let starsArr = []
    for (let i = 0; i < max; i++) {
      starsArr.push(<i key={i} className="star icon" style={{ color: '#f39c12' }}></i>)
    }
    return starsArr
  }

  render() {
    const { courseplace } = this.state
    return (
      <div style={{ padding: '2rem 10rem' }}>
        {courseplace &&
          <React.Fragment>
            <h1>{courseplace.name}</h1>
            <hr />
            <section style={{ display: 'flex' }} className="ui segment">
              <div style={{ padding: '1rem', }}>
                <img src={dummyImg} alt="" style={{ boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }} />
                <div style={{ marginTop: '1rem' }}>
                  <p><i className="star icon"></i><b>Rating</b>: {this.renderStars(courseplace.rating)}</p>
                </div>
                <div>
                  <p><i className="home icon"></i><b>Address</b>: {courseplace.address}</p>
                </div>
                <div>
                  <p><i className="phone square icon"></i><b>Phone</b>: {courseplace.phone}</p>
                </div>
              </div>
              <div style={{ padding: '1rem' }}>
                <p>{courseplace.description}</p>
              </div>
            </section>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <BlueButton
                buttonText="Register" />
            </div>
          </React.Fragment>
        }
      </div>
    )
  }

  componentDidMount = () => {
    const { courseplaceId } = this.props.match.params;
    apiCall('get', `/api/coursePlace/${courseplaceId}`)
      .then(res => {
        let courseplace = res
        courseplace.interestedTeachers = res.interestedTeachers.map(interestedTeacher => interestedTeacher._id)
        this.setState({ ...this.state, courseplace: courseplace })
      })
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    user: reduxState.currentUser.user
  }
}

export default withRouter(connect(mapReduxStateToProps, null)(CourseplaceDetail))