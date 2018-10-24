import React, { Component } from 'react'
import { apiCall } from '../../services/api'
import dummyTeacherImg from '../../assets/img/steve_jobs_PNG2.png'
import RedButton from '../../components/buttons/RedButton'
import BlueButton from '../../components/buttons/BlueButton'
import { setCurrentUser } from '../../store/actions/auth';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class TeacherRequesterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: undefined
    }
  }

  approveSubmission = (event) => {
    const { teacherId } = this.props.match.params
    event.preventDefault();
    apiCall('post', `/api/coursePlace/approveTeacher`, {
      teacherId: teacherId,
      courseplaceId: this.props.user.courseplaceId
    })
      .then(res => {
        this.props.history.push('/admin/home')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { teacher } = this.state
    return (
      <div style={{ padding: '2rem 10rem' }}>
        {teacher &&
          <React.Fragment>
            <h1>{teacher.name}</h1>
            <section style={{ display: 'flex' }}>
              <div style={{ padding: '1rem' }}>
                <img src={dummyTeacherImg} alt="" width="200" />
                <div>
                  <p><b>Email</b>: {teacher.email}</p>
                </div>
                <div>
                  <p><b>Phone</b>: {teacher.phone}</p>
                </div>
              </div>
              <div>
                <h2>Personal Description</h2>
                <hr />
                <p>{teacher.description}</p>
              </div>
            </section>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <BlueButton
                buttonText="Approve"
                onClick={this.approveSubmission}
              />
              <RedButton
                buttonText="Reject"
                onClick={this.rejectSubmission}
              />

            </div>
          </React.Fragment>
        }
      </div>
    )
  }

  componentDidMount = () => {
    const { teacherId } = this.props.match.params;
    apiCall('get', `/api/user/${teacherId}`)
      .then(res => {
        this.setState({ ...this.state, teacher: res })
      })
      .catch(err => {

      })
  }

}

function mapReduxStateToProps(reduxState) {
  return {
    user: reduxState.currentUser.user
  }
}

export default withRouter(connect(mapReduxStateToProps, null)(TeacherRequesterDetail))