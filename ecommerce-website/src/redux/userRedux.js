import { createSlice } from "@reduxjs/toolkit"

const userRedux = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = {
              ...action.payload,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName,
            };
          },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => { // Add this logout action
            state.currentUser = null;
        },
    },
});

// add reducers
export const { loginStart, loginSuccess, loginFailure, logout } = userRedux.actions

export default userRedux.reducer


