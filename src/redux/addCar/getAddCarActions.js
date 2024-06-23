import axios from 'axios';
import {
  FETCH_CAR_REQUEST, FETCH_CAR_SUCCESS, FETCH_CAR_FAILURE,
} from './favouriteTypes';

export const fetchAddCarRequest = () => ({
  type: FETCH_CAR_REQUEST,
});

export const fetchAddCarSuccess = cars => ({
  type: FETCH_CAR_SUCCESS,
  payload: cars,
});

export const fetchAddCarFailure = error => ({
  type: FETCH_CAR_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchAddCar = () => function (dispatch) {
  dispatch(fetchAddCarRequest());
  axios
    .get('/add_car', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchAddCarSuccess(data));
    })
    .catch(error => {
      dispatch(fetchAddCarFailure(error.response.data.error));
    });
};
