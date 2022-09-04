import { Button, PasswordInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React, { FC, useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";
import { useResetPasswordMutation } from "../../redux/api/auth/authApiSlice";

type Props = {};

type FormValues = {
  currentPassword: string;
  newPassword: string;
};

const SettingsPage: FC<Props> = () => {
  const [resetPassword, { isLoading, isSuccess, isError, error }] =
    useResetPasswordMutation();
  const { getInputProps, onSubmit } = useForm<FormValues>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },
    validate: {
      currentPassword: (value) =>
        value.length < 1 && "Please enter the current password",
      newPassword: (value, values) =>
        value.length < 1
          ? "Please enter a new password"
          : value === values.currentPassword
          ? "New password is the same as old"
          : null,
    },
  });

  const handleSubmit = (values: FormValues) => {
    resetPassword(values);
  };

  useEffect(() => {
    if (isSuccess) {
      showNotification({
        id: "success-password-change",
        title: "Done!",
        message: "Successfully changed your password!",
        color: "teal",
        icon: <BsCheck2 size={20} color="white" />,
        autoClose: 3000,
        disallowClose: false,
      });
    }
    
  }, [isSuccess])


  return (
    <Stack ml={30}>
      <Text size={20}>Settings</Text>
      <form style={{ width: "20%" }} onSubmit={onSubmit(handleSubmit)}>
        <Stack>
          <PasswordInput
            variant="filled"
            label="Current Password:"
            {...getInputProps("currentPassword")}
          />
          {isError &&
            error !== undefined &&
            "data" in error &&
            error.status === 403 && (
              <Text size="xs" mt={-10} mb={-10} py={0} color="red">
                Incorrect password
              </Text>
            )}
          <PasswordInput
            variant="filled"
            label="New Password:"
            {...getInputProps("newPassword")}
          />
        </Stack>
        <Button mt={15} type="submit" loading={isLoading}>
          {isLoading ? "Setting new password..." : "Change Password"}
        </Button>
      </form>
    </Stack>
  );
};

export default SettingsPage;
