import { SET_CURRENT_USER } from '../actionTypes';
import { apiCall } from '../../services/api';
import { addError, removeError } from './error'

//ACTION CREATORS
export function setCurrentUser(user, isAuthenticated = false) {
	return {
		type: SET_CURRENT_USER,
		isAuthenticated,
		user
	}
}

export function signinUser(data) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			return apiCall('post', `/api/user/login`, data)
				.then(user => {
					localStorage.setItem('user', JSON.stringify(user));
					dispatch(setCurrentUser(user, true));
					dispatch(removeError())
					resolve(user); //API call success
				})
				.catch(err => {
					dispatch(addError(err.message));
					reject(err); //API call fails
				});
		})
	}
}

export function signOutUser() {
	return dispatch => {
		dispatch(setCurrentUser({}, false));
	}
}