import { createAction } from "@reduxjs/toolkit";

//actions created to solve circular dependency issue
export const reauthTokenReceived = createAction<{ access_token: string }>("reauthTokenReceived");
export const logout = createAction<void>("logout")