import axios from 'axios';
import {
  ADD_TESTDRIVE_REQUEST,
  ADD_TESTDRIVE_SUCCESS,
  ADD_TESTDRIVE_FAILURE,
  REMOVE_TESTDRIVE_SUCCESS,
  REMOVE_TESTDRIVE_FAILURE,
  REMOVE_TESTDRIVE_REQUEST,
} from './testDriveTypes';

export const addTestDriveRequest = () => ({
  type: ADD_TESTDRIVE_REQUEST,
});

export const addTestDriveSuccess = message => ({
  type: ADD_TESTDRIVE_SUCCESS,
  payload: message,
});

export const addTestDriveFailure = error => ({
  type: ADD_TESTDRIVE_FAILURE,
  payload: error,
});

export const removeTestDriveRequest = () => ({
  type: REMOVE_TESTDRIVE_REQUEST,
});

export const removeTestDriveSuccess = message => ({
  type: REMOVE_TESTDRIVE_SUCCESS,
  payload: message,
});

export const removeTestDriveFailure = error => ({
  type: REMOVE_TESTDRIVE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const addTestDrive = data => function (dispatch) {
  dispatch(addTestDriveRequest());
  axios
    .post('/test_drive', data)
    .then(response => {
      const { data } = response;
      dispatch(addTestDriveSuccess(data.message));
    })
    .catch(error => {
      dispatch(addTestDriveFailure(error.response.data.error));
    });
};

// eslint-disable-next-line func-names
export const removeTestDrive = id => function (dispatch) {
  dispatch(removeTestDriveRequest());
  axios
    .delete(`/test_drive/${id}`)
    .then(response => {
      const { data } = response;
      dispatch(removeTestDriveSuccess(data.message));
    })
    .catch(error => {
      dispatch(removeTestDriveFailure(error.response.data.message));
    });
};
