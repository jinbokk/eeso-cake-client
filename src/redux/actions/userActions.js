import axios from "axios";
// import { USER_SERVER } from "../components/Config.js";

// function registerUser(dataToSubmit) {
//   const req = axios
//     .post(`${USER_SERVER}/register`, dataToSubmit)
//     .then((res) => res.data);

//   return {
//     type: REGISTER_USER,
//     payload: req,
//   };
// }

function registerUser(dataToSubmit) {
  return async (dispatch) => {
    try {
      const registerResult = await axios
        .post("/api/users/register", dataToSubmit)
        .then((res) => res.data);

      dispatch({
        type: "REGISTER_USER",
        payload: registerResult,
      });
    } catch (error) {
      console.log("error occurred : ", error);
    }
  };
}

function loginUser(dataToSubmit) {
  return async (dispatch) => {
    try {
      const loginResult = await axios
        .post("/api/users/login", dataToSubmit)
        .then((res) => res.data);

      dispatch({
        type: "LOGIN_USER",
        payload: loginResult,
      });
    } catch (error) {
      console.log("error occurred : ", error);
    }
  };
}

// redux-promise middleware를 사용해야 하는데, redux-thunk로 Promise 객체 비동기처리 다 가능하여 필요 없을 듯?
// function loginUser(dataToSubmit) {
//   try {
//     console.log(dataToSubmit);

//     const req = axios
//       .post("/api/users/login", dataToSubmit)
//       .then((res) => res.data);

//     console.log(req);

//     return {
//       type: "LOGIN_USER",
//       payload: req,
//     };
//   } catch (error) {
//     console.log("error occurred : ", error);
//   }
// }

function auth() {
  return async (dispatch) => {
    try {
      const authUserData = await axios
        .get("/api/users/auth")
        .then((res) => res.data);

      dispatch({
        type: "AUTH_USER",
        payload: authUserData,
      });
    } catch (error) {
      console.log("error occurred : ", error);
    }
  };
}

// function auth() {
//   const req = axios.get(`${USER_SERVER}/auth`).then((res) => res.data);

//   return {
//     type: AUTH_USER,
//     payload: req,
//   };
// }

// function logoutUser() {
//   const req = axios.get(`${USER_SERVER}/logout`).then((res) => res.data);

//   return {
//     type: LOGOUT_USER,
//     payload: req,
//   };
// }

export const userActions = {
  registerUser,
  loginUser,
  auth,
  //   logoutUser,
};
