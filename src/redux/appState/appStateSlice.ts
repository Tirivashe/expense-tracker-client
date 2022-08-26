import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type AppState = {
  openAside: boolean
}


const initialState: AppState = {
  openAside: false
}

export const AppStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    toggleAside: (state: AppState) => {
      state.openAside = !state.openAside
    }
  }
})

export default AppStateSlice.reducer
export const { toggleAside } = AppStateSlice.actions
export const selectIsAsideOpen = (state: RootState) => state.applicationState.openAside
