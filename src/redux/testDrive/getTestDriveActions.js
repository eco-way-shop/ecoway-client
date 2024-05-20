import axios from 'axios';
import {
  FETCH_TESTDRIVE_REQUEST, FETCH_TESTDRIVE_SUCCESS, FETCH_TESTDRIVE_FAILURE,
} from './testDriveTypes';

export const fetchTestDriveRequest = () => ({
  type: FETCH_TESTDRIVE_REQUEST,
});

export const fetchTestDriveSuccess = test_drive => ({
  type: FETCH_TESTDRIVE_SUCCESS,
  payload: test_drive,
});

export const fetchTestDriveFailure = error => ({
  type: FETCH_TESTDRIVE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchTestDrive = () => function (dispatch) {
  dispatch(fetchTestDriveRequest());
  axios
    .get('/test_drives', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchTestDriveSuccess(data));
    })
    .catch(error => {
      dispatch(fetchTestDriveFailure(error.response.data.error));
    });
};
