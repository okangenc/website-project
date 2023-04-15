import { createSlice } from "@reduxjs/toolkit";

const userRedux = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching: false,
        error: ""
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.error = ""; // Reset error state
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = ""; // Clear the error state
            state.currentUser = {
                ...action.payload,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }; 
        },        
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = "INVALID_LOGIN";
        },
        logout: (state) => { // Add this logout action
            state.currentUser = null;
        },
    },
});

// add reducers
export const { loginStart, loginSuccess, loginFailure, logout } = userRedux.actions

export default userRedux.reducer
