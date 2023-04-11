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
            state.currentUser = action.payload
            console.log("User reducer state updated: ", state); // Add this line
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

// add reducers
export const { loginStart, loginSuccess, loginFailure } = userRedux.actions

export default userRedux.reducer


