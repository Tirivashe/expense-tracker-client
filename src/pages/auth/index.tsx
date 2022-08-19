import { Button, Stack, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { FC } from "react";
import { RegisterFormValues, LoginFormValues } from "../../types";
import { loginSchema, registerSchema } from "./schema";
import { useStyles } from "./styles";


const AuthenticationPage: FC = () => {
  const { classes } = useStyles();
  const { getInputProps: getInputPropsLogin, onSubmit: onSubmitLogin, errors: loginErrors } =
    useForm<LoginFormValues>({
      initialValues: {
        loginEmail: "",
        loginPassword: "",
      },
      validate: zodResolver(loginSchema)
    });

  const { getInputProps: getInputPropsRegister, onSubmit: onSubmitRegister, errors: registerErrors } =
    useForm<RegisterFormValues>({
      initialValues: {
        registerEmail: "",
        registerPassword: "",
      },
      validate: zodResolver(registerSchema)
    });
  return (
    <Stack className={classes.mainStack} justify="space-around" align="center">
      <form
        className={classes.containerStack}
        onSubmit={onSubmitLogin((values) =>
          console.log("Login values: ", {
            email: values.loginEmail,
            password: values.loginPassword,
          })
        )}
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
            {...getInputPropsLogin("loginEmail")}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Password"
            variant="filled"
            required
            {...getInputPropsLogin("loginPassword")}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
      <form
        className={classes.containerStack}
        onSubmit={onSubmitRegister((values) =>
          console.log("Registration values: ", {
            email: values.registerEmail,
            password: values.registerPassword,
          })
        )}
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
            {...getInputPropsRegister("registerEmail")}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Password"
            variant="filled"
            required
            {...getInputPropsRegister("registerPassword")}
          />
          <Button type="submit">Register</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default AuthenticationPage;
