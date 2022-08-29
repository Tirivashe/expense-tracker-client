import { api } from "..";
import { AuthDto } from "../dto/auth.dto";

export const authApiSlice = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<{ access_token: string }, AuthDto>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: build.mutation<{ access_token: string }, AuthDto>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice