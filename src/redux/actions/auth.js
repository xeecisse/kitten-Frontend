import {
  LOGIN,
  LOGOUT,
  SET_CURRENT_PROFILE,
  SET_PROFILE,
  SET_TOKEN,
} from "./actionTypes";
import { apiURL, postApi } from "./api";

const TOKEN_KEY = "l@loon@_";

export function login(
  { email, password },
  callback = (f) => f,
  error = (f) => f
) {
  return (dispatch) => {
    postApi("users/login", { email, password })
      .then((resp) => {
        if (resp.success) {
          dispatch({ type: SET_TOKEN, payload: resp.token });
          dispatch({ type: LOGIN, payload: resp.user });
          localStorage.setItem(TOKEN_KEY, resp.token);
          callback();
        } else {
          alert(resp.message);
          error();
        }
      })
      .catch((err) => {
        error();
        console.log(err);
      });
  };
}

export function init(callback = (f) => f, error = (f) => f) {
  return (dispatch) => {
    console.log("init called...");
    let authToken = localStorage.getItem(TOKEN_KEY) || "";

    if (authToken) {
      console.log("auth token found...");

      verifyToken(authToken)
        .then((data) => {
          console.log("verified...");
          console.log(data);
          if (data.success) {
            dispatch({ type: LOGIN, payload: data.user });
            dispatch({ type: SET_PROFILE, payload: data.profiles });
            dispatch({
              type: SET_CURRENT_PROFILE,
              payload: data.activeProfile,
            });
            callback();
            //   console.log(data);
          } else {
            error();
            localStorage.removeItem(TOKEN_KEY);
            console.log("Token expired");
            dispatch({ type: LOGOUT });
          }
        })
        .catch((err) => {
          console.log("Token is invalid", err);
          dispatch({ type: LOGOUT });
          error();
        });
    } else {
      error();
      dispatch({ type: LOGOUT });
    }
  };
}

async function verifyToken(token) {
  //   console.log(token);
  try {
    let response = await fetch(`${apiURL}/verify-token`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    let data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function logout(callback = (f) => f) {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem(TOKEN_KEY);
    callback();
  };
}
