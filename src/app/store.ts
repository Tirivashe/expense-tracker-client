import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from '../redux/api';
import appStateReducer from '../redux/appState/appStateSlice';

export const store = configureStore({
  reducer: {
    applicationState: appStateReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
