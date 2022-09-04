import { Stack } from "@mantine/core";
import { FC } from "react";
import { useStyles } from "./styles";
import { LoginForm, RegistrationForm } from "../../components";

const AuthenticationPage: FC = () => {
  const { classes } = useStyles();
  
  return (
    <Stack className={classes.mainStack} justify="space-around" align="center">
      <LoginForm />
      <RegistrationForm />
    </Stack>
  );
};

export default AuthenticationPage;
