import { api } from "..";

export const userApiSlice = api.injectEndpoints({
  endpoints: (build) => ({
    editProfile: build.mutation<
      { firstName: string; lastName: string },
      { firstName: string; lastName: string }
    >({
      query: (credentials) => ({
        url: "/users/edit-profile",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useEditProfileMutation } = userApiSlice;
