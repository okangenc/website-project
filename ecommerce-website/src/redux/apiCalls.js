import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/authentication/login", user);
        dispatch(loginSuccess(res.data));
        console.log("Login successful: ", res.data); // Add this line
    } catch (err) {
        dispatch(loginFailure());
    }
};