import axios from "axios";
import { GET_USER_SUCCESS, GET_USER_FAILURE, ADD_EDIT_USER } from "./Const";

const BASE_URL = "https://645de6a312e0a87ac0e25dd0.mockapi.io/form/form/";

export const getUserList = () => {
  return (dispatch) => {
    axios
      .get(BASE_URL)
      .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: GET_USER_FAILURE, payload: error });
      });
  };
};

export const saveUser = (user, name) => {
  return (dispatch) => {
    const data = {
      name: name,
    };

    if (!name) {
      alert("kindly fill name");
      return;
    }

    if (user.id) {
      axios.put(BASE_URL + user.id, data).then((res) => {
        console.log(res);
        if (res.data) {
          dispatch({ type: ADD_EDIT_USER, payload: true });
        } else {
          alert("error in editing");
        }
      });
    } else {
      axios.post(BASE_URL, data).then((res) => {
        if (res.data) {
          dispatch({ type: ADD_EDIT_USER, payload: true });
        } else {
          alert("error in creating");
        }
      });
    }
  };
};
