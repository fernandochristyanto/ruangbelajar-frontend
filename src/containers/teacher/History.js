import React, { Component } from 'react'
import { apiCall } from '../../services/api'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { convertZone, formatDate } from '../../services/date'

class History extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userDetail: undefined,
      selectedDdlValue: "pending"
    }
  }

  dropdownChange = (event) => {
    this.setState({ ...this.state, selectedDdlValue: event.target.value })
  }

  mapCourseAccordingToDdlType = (type) => {
    const { userDetail } = this.state
    let coursePlaces = []
    switch (type) {
      case "pending":
        coursePlaces = [...userDetail.pendingCoursePlaces]
        break;
      case "ongoing":
        coursePlaces = [...userDetail.ongoingCoursePlaces]
        break;
      case "rejected":
        coursePlaces = [...userDetail.rejectedCoursePlaces]
        break;
      case "onprogress":
        coursePlaces = [...userDetail.onprogressCoursePlaces]
        break;
    }

    return coursePlaces.map(coursePlace => (
      <React.Fragment>
        <div key={coursePlace.id} className="ui card" style={{ width: '100%' }}>
          <div className="content">
            <div className="header">{coursePlace.name}</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">Details</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                    Address: {coursePlace.address}
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    {coursePlace.description.length > 300 ? coursePlace.description.substring(0, 300) + "...." : coursePlace.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="extra content">
            {type == "pending" &&
              <p>Applied on: {formatDate(convertZone(coursePlace.createdAt))}</p>
            }
            <button class="ui button" onClick={(e) => this.props.history.push(`/teacher/cp/${coursePlace._id}`)}>
              See Place Detail
            </button>
          </div>
        </div>
      </React.Fragment>
    ))
  }

  render() {
    const { userDetail } = this.state;
    return (
      <div style={{ padding: '2rem' }}>
        {!userDetail ? <p>Loading User Details</p> :
          <React.Fragment>
            <section>
              <div style={{ display: 'flex', alignContent: 'center' }}>
                <h3 style={{ display: 'inline', marginRight: '1rem' }}>Category</h3>
                <div>
                  <select name="type" id="select" style={{ padding: '1rem' }} onChange={this.dropdownChange}>
                    <option value="pending">pending</option>
                    <option value="ongoing">ongoing</option>
                    <option value="rejected">rejected</option>
                    <option value="onprogress">onprogress</option>
                  </select>
                </div>
              </div>
            </section>
            <section>
              {this.mapCourseAccordingToDdlType(this.state.selectedDdlValue)}
            </section>
          </React.Fragment>
        }
      </div>
    )
  }

  componentDidMount() {
    const { user } = this.props;

    apiCall('get', `/api/user/${user.id}`)
      .then(res => {
        this.setState({ ...this.state, userDetail: res })
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

export default withRouter(connect(mapReduxStateToProps, null)(History))