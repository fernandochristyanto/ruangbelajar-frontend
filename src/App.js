import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux'
import { configureStore } from './store'
import { setCurrentUser } from './store/actions/auth'

// COMPONENTS
import AppRoute from './AppRoute';

const store = configureStore();

if (localStorage.user) {
  store.dispatch(setCurrentUser(JSON.parse(localStorage.user), true))
}
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <React.Fragment>
              <AppRoute />
            </React.Fragment>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
