import { Button, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React, { FC } from "react";
import { useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useEditProfileMutation } from "../../redux/api/user";

type Props = {};

type FormValues = {
  firstName: string;
  lastName: string;
};

const ProfilePage: FC<Props> = () => {
  const [editProfile, { isLoading, isSuccess, isError }] =
    useEditProfileMutation();
  const { getInputProps, onSubmit } = useForm<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate: {
      firstName: (value) => value.length < 1 && "Please enter your first name",
      lastName: (value) => value.length < 1 && "Please enter your last name",
    },
  });

  const handleSubmit = (values: FormValues) => {
    editProfile(values);
  };

  useEffect(() => {
    isSuccess &&
      showNotification({
        id: "edit-profile-success",
        title: "Success",
        message: "Profile successfully updated",
        color: "teal",
        icon: <BsCheck2 size={20} color="white" />,
        autoClose: 3500,
        disallowClose: false,
      });
    isError &&
      showNotification({
        id: "edit-profile-error",
        title: "Error",
        message: "Couldn't update your profile",
        color: "red",
        icon: <MdClose size={20} color="white" />,
        autoClose: 3500,
        disallowClose: false,
      });
  }, [isSuccess, isError]);

  return (
    <Stack ml={30}>
      <Text size={20}>Profile</Text>
      <form style={{ width: "20%" }} onSubmit={onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            variant="filled"
            label="First Name:"
            {...getInputProps("firstName")}
          />
          <TextInput
            variant="filled"
            label="Last Name:"
            {...getInputProps("lastName")}
          />
        </Stack>
        <Button mt={15} type="submit" loading={isLoading}>
          {isLoading ? "Updating profile..." : "Update Info"}
        </Button>
      </form>
    </Stack>
  );
};

export default ProfilePage;
