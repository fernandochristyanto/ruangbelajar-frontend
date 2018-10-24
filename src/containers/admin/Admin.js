import React, { Component } from 'react'
import AdminRoute from './AdminRoute'

class Admin extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <React.Fragment>
        <div>
          <AdminRoute
            {...this.props}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Admin