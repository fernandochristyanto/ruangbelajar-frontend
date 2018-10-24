import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { apiCall } from '../../services/api'
import BlueButton from '../../components/buttons/BlueButton'
import StudentsGrid from '../../components/panel/StudentsGrid';
import TeachersGrid from '../../components/panel/TeachersGrid'
import RedButton from '../../components/buttons/RedButton'


class AdminHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courseplace: undefined,
      teachers: undefined
    }
  }

  mapRequestToTable() {
    const { courseplace } = this.state;
    if (courseplace && courseplace.interestedTeachers) {
      return (
        <table className="ui single line table">
          <thead>
            <tr>
              <th>Applicant Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courseplace.interestedTeachers.map(interestedTeacher => (
              <tr>
                <td>{interestedTeacher.email}</td>
                <td><BlueButton
                  buttonText="Details"
                  onClick={(event) => { this.props.history.push(`/admin/v/teacher/${interestedTeacher._id}`) }}
                />
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      )
    }
  }

  render() {
    const { user } = this.props;
    const { courseplace } = this.state;
    return (
      <div style={{ padding: '2rem' }}>
        <div class="ui raised segment">
          <h1>Welcome back, Admin {user.name}</h1>
          {courseplace &&
            <p>Your course place have <b>{courseplace.interestedTeachers.length} applicant(s)</b></p>
          }
          <hr />
          {this.mapRequestToTable()}
        </div>

        <TeachersGrid
          title="All Teachers partnering with us"
          teachers={this.state.teachers}
        />
      </div>
    )
  }

  componentDidMount = () => {
    apiCall('get', `/api/coursePlace/${this.props.user.courseplaceId}`)
      .then(res => {
        this.setState({ ...this.state, courseplace: res })
      })
      .catch(err => {
        console.log(err)
      })

    apiCall('get', `/api/user/getAllByRole?role=teacher`)
      .then(res => {
        this.setState({ ...this.state, teachers: res })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    user: reduxState.currentUser.user
  }
}

export default withRouter(connect(mapReduxStateToProps, null)(AdminHome))