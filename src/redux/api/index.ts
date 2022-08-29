import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";
import { baseQueryWithReauth } from "./reauthorization";

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
