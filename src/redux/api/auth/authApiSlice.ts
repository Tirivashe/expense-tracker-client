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
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(api.util.resetApiState())
        } catch (error) {
          console.error(error)
        }
      }
    }),
    resetPassword: build.mutation<void, { currentPassword: string, newPassword: string }>({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        body
      })
    })
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useResetPasswordMutation } = authApiSlice