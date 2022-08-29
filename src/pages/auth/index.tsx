import { Button, Stack, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { FC } from "react";
import { RegisterFormValues, LoginFormValues } from "../../types";
import { loginSchema, registerSchema } from "./schema";
import { useStyles } from "./styles";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../redux/api/auth/authApiSlice";
import { AuthDto } from "../../redux/api/dto/auth.dto";
import { Navigate } from "react-router-dom";

const AuthenticationPage: FC = () => {
  const [login, { isSuccess: isLoginSuccess }] = useLoginMutation();
  const [register, { isSuccess: isRegistrationSuccess }] = useRegisterMutation();
  const { classes } = useStyles();
  const { getInputProps: getInputPropsLogin, onSubmit: onSubmitLogin } =
    useForm<LoginFormValues>({
      initialValues: {
        loginEmail: "",
        loginPassword: "",
      },
      validate: zodResolver(loginSchema),
    });

  const { getInputProps: getInputPropsRegister, onSubmit: onSubmitRegister } =
    useForm<RegisterFormValues>({
      initialValues: {
        registerEmail: "",
        registerPassword: "",
      },
      validate: zodResolver(registerSchema),
    });
  
  const handleLoginSubmit = (values: LoginFormValues) => {
    const credentials: AuthDto = { email: values.loginEmail, password: values.loginPassword }
    login(credentials)
  }

  const handleRegisterSubmit = (values: RegisterFormValues) => {
    const credentials: AuthDto = { email: values.registerEmail, password: values.registerPassword }
    register(credentials)
  }
  
  if(isRegistrationSuccess) return <Navigate to="/" replace={true}/>
  if(isLoginSuccess) return <Navigate to="/" replace={true}/>

  return (
    <Stack className={classes.mainStack} justify="space-around" align="center">
      <form
        className={classes.containerStack}
        onSubmit={onSubmitLogin(handleLoginSubmit)}
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
        onSubmit={onSubmitRegister(handleRegisterSubmit)}
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
