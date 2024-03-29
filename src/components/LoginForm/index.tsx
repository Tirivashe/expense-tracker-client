import { Button, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { loginSchema } from "./schema";
import { useLoginMutation } from "../../redux/api/auth/authApiSlice";
import { AuthDto } from "../../redux/api/dto/auth.dto";
import { FormCredentials } from "../../types";
import { useStyles } from "./styles";

type Props = {};

const LoginForm: FC<Props> = () => {
  const [login, { isSuccess, isError, isLoading, error }] = useLoginMutation();
  const { classes } = useStyles();
  const { getInputProps, onSubmit } = useForm<FormCredentials>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginSchema),
  });
  const handleLoginSubmit = (values: FormCredentials) => {
    const credentials: AuthDto = values;
    login(credentials);
  };

  if (isSuccess) return <Navigate to="/" replace={true} />;

  return (
    <form
      className={classes.containerStack}
      onSubmit={onSubmit(handleLoginSubmit)}
    >
      <Stack justify="center" spacing="lg" className={classes.containerStack}>
        <Title order={3} align="center">
          Login
        </Title>
        <TextInput
          label="Email"
          type="email"
          variant="filled"
          placeholder="e.g. example@email.com"
          required
          {...getInputProps("email")}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Password"
          variant="filled"
          required
          {...getInputProps("password")}
        />
        {isError && error !== undefined && "data" in error && error.status === 403 && (
          <Text size="xs" mt={-10} mb={-10} py={0} color="red">Invalid credentials</Text>
        )}
        <Button type="submit" loading={isLoading}>Login</Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
