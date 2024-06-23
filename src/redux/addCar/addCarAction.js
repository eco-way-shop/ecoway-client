import axios from 'axios';
import {
  ADD_CAR_REQUEST,
  ADD_CAR_SUCCESS,
  ADD_CAR_FAILURE,
  REMOVE_CAR_SUCCESS,
  REMOVE_CAR_FAILURE,
  REMOVE_CAR_REQUEST,
} from './addCarTypes';

export const addCarRequest = () => ({
  type: ADD_CAR_REQUEST,
});

export const addCarSuccess = message => ({
  type: ADD_CAR_SUCCESS,
  payload: message,
});

export const addCarFailure = error => ({
  type: ADD_CAR_FAILURE,
  payload: error,
});

export const removeCarRequest = () => ({
  type: REMOVE_CAR_REQUEST,
});

export const removeCarSuccess = message => ({
  type: REMOVE_CAR_SUCCESS,
  payload: message,
});

export const removeCarFailure = error => ({
  type: REMOVE_CAR_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const addCar = data => function (dispatch) {
  dispatch(addCarRequest());
  axios
    .post('/add_car', data)
    .then(response => {
      const { data } = response;
      dispatch(addCarSuccess(data.message));
    })
    .catch(error => {
      dispatch(addCarFailure(error.response.data.error));
    });
};

// eslint-disable-next-line func-names
export const removeCar = id => function (dispatch) {
  dispatch(removeCarRequest());
  axios
    .delete(`/cars/${id}`)
    .then(response => {
      const { data } = response;
      dispatch(removeCarSuccess(data.message));
    })
    .catch(error => {
      dispatch(removeCarFailure(error.response.data.message));
    });
};
