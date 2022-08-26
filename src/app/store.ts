import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appStateReducer from '../redux/appState/appStateSlice';

export const store = configureStore({
  reducer: {
    applicationState: appStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
