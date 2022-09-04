import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { authApiSlice } from "../api/auth/authApiSlice";
import { reauthTokenReceived, logout } from "./customActions"

type AppState = {
  openAside: boolean,
  access_token: string | null
}


const initialState: AppState = {
  openAside: false,
  access_token: null
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
    )
  }
})

export default AppStateSlice.reducer
export const { toggleAside } = AppStateSlice.actions
export const selectIsAsideOpen = (state: RootState) => state.applicationState.openAside
export const selectAccessToken = (state: RootState) => state.applicationState.access_token
