import * as drive from './testDriveTypes';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

const getTestDriveReducer = (state = initialState, action) => {
  switch (action.type) {
    case drive.FETCH_TESTDRIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drive.FETCH_TESTDRIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        error: '',
      };
    case drive.FETCH_TESTDRIVE_FAILURE:
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

export default getTestDriveReducer;
