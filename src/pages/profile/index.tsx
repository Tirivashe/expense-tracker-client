import { Button, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { FC } from "react";

type Props = {};

type FormValues = {
  firstName: string;
  lastName: string;
};

const ProfilePage: FC<Props> = () => {
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
    console.log(values);
  };

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
        <Button mt={15} type="submit">
          Update Info
        </Button>
      </form>
    </Stack>
  );
};

export default ProfilePage;
