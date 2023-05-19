import { GET_USER_SUCCESS, GET_USER_FAILURE, ADD_EDIT_USER } from "./Const";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  refresh: false,
};

const ReducerUser = (state = initialState, action) => {
  console.log(action, "action ReducerUser");
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      }
      
    case ADD_EDIT_USER:
      return {
        ...state,
        isLoading: false,
        refresh: action.payload?!state.refresh:state.refresh,
      }

    default:
      return state;
  }
};

export default ReducerUser;
