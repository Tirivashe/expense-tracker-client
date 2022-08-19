import { Button, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { RegisterFormValues, LoginFormValues } from "../../types";
import { useStyles } from "./styles";

type Props = {};

const AuthenticationPage = (props: Props) => {
  const { classes } = useStyles();
  const { getInputProps: getInputPropsLogin, onSubmit: onSubmitLogin } =
    useForm<LoginFormValues>({
      initialValues: {
        loginEmail: "",
        loginPassword: "",
      },
    });

  const { getInputProps: getInputPropsRegister, onSubmit: onSubmitRegister } =
    useForm<RegisterFormValues>({
      initialValues: {
        registerEmail: "",
        registerPassword: "",
      },
    });
  return (
    <Stack className={classes.mainStack} justify="space-around" align="center">
      <form
        className={classes.containerStack}
        onSubmit={onSubmitLogin((values) => console.log("Login values: ", { email: values.loginEmail, password: values.loginPassword }))}
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
          console.log("Registration values: ", { email: values.registerEmail, password: values.registerPassword })
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
