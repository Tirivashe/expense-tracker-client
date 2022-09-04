import { createSlice } from "@reduxjs/toolkit";
import { string } from "zod";
import { RootState } from "../../app/store";
import { authApiSlice } from "../api/auth/authApiSlice";
import { userApiSlice } from "../api/user";
import { reauthTokenReceived, logout } from "./customActions"

type AppState = {
  openAside: boolean,
  access_token: string | null,
  user: { 
    firstName: string,
    lastName: string
   }
}


const initialState: AppState = {
  openAside: false,
  access_token: null,
  user: {
    firstName: "User",
    lastName: "New"
  }
}

export const AppStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    toggleAside: (state: AppState) => {
      state.openAside = !state.openAside
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reauthTokenReceived, (state, action) => {
      state.access_token = action.payload.access_token
    }).addCase(logout, (state) => { 
      state.access_token = null 
    })
    .addMatcher(
     authApiSlice.endpoints.register.matchFulfilled,
     (state: AppState, { payload, }) => {
      state.access_token = payload.access_token
     } 
    )
    .addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state: AppState, { payload }) => {
        state.access_token = payload.access_token
      }
    ).addMatcher(
     authApiSlice.endpoints.logout.matchFulfilled,
     (state: AppState) => {
      state.access_token = null
     } 
    ).addMatcher(userApiSlice.endpoints.editProfile.matchFulfilled, (state: AppState, { payload }) => {
      state.user = payload
    })
  }
})

export default AppStateSlice.reducer
export const { toggleAside } = AppStateSlice.actions
export const selectIsAsideOpen = (state: RootState) => state.applicationState.openAside
export const selectAccessToken = (state: RootState) => state.applicationState.access_token
export const selectUser = (state: RootState) => state.applicationState.user
