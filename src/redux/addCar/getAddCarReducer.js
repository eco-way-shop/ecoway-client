import * as car from './addCarTypes';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

const getAddCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case car.FETCH_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case car.FETCH_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        error: '',
      };
    case car.FETCH_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        cars: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAddCarReducer;
