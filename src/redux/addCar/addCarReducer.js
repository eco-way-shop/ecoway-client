import * as car from './addCarTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const addCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case car.ADD_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case car.ADD_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case car.ADD_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case car.REMOVE_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case car.REMOVE_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case car.REMOVE_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addCarReducer;
