import * as drive from './testDriveTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const testDriveReducer = (state = initialState, action) => {
  switch (action.type) {
    case drive.ADD_TESTDRIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drive.ADD_TESTDRIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case drive.ADD_TESTDRIVE_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case drive.REMOVE_TESTDRIVE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drive.REMOVE_TESTDRIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case drive.REMOVE_TESTDRIVE_FAILURE:
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

export default testDriveReducer;
