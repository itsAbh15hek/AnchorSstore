import { publicRequest, userRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  userUpdateFailure,
  userUpdateStart,
  userUpdateSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const updateUser = async (dispatch, user) => {
  dispatch(userUpdateStart());
  try {
    console.log(user);
    const res = await userRequest.put(`users/${user._id}`, user);
    dispatch(userUpdateSuccess(res.data));
  } catch (error) {
    dispatch(userUpdateFailure());
    console.log(error.msg);
  }
};
