import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux'

// COMPONENTS
import AppRoute from './AppRoute';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ maxWidth: '1300px', margin: 'auto' }}>
        <Router>
          <React.Fragment>
            <AppRoute />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
