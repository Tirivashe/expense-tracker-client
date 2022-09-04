import { Button, Stack, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { registerSchema } from "./schema";
import { useRegisterMutation } from "../../redux/api/auth/authApiSlice";
import { AuthDto } from "../../redux/api/dto/auth.dto";
import { FormCredentials } from "../../types";
import { useStyles } from "./styles";

type Props = {};

const RegistrationForm: FC<Props> = () => {
  const [register, { isSuccess }] = useRegisterMutation();
  const { classes } = useStyles();

  const { getInputProps, onSubmit } = useForm<FormCredentials>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(registerSchema),
  });

  const handleRegisterSubmit = (values: FormCredentials) => {
    const credentials: AuthDto = values
    register(credentials);
  };

  if (isSuccess) return <Navigate to="/" replace={true} />;
  return (
    <form
      className={classes.containerStack}
      onSubmit={onSubmit(handleRegisterSubmit)}
    >
      <Stack justify="center" spacing="lg" className={classes.containerStack}>
        <Title order={3} align="center">
          Register
        </Title>
        <TextInput
          label="Email"
          type="email"
          placeholder="e.g. example@email.com"
          variant="filled"
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
        <Button type="submit">Register</Button>
      </Stack>
    </form>
  );
};

export default RegistrationForm;
