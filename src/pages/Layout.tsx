import { AppShell } from "@mantine/core";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppNavbar } from "../components";

type Props = {};

const Layout: FC<Props> = () => {
  return (
    <AppShell 
      navbarOffsetBreakpoint={1200} 
      navbar={<AppNavbar />}
      padding="xl">
      <Outlet />
    </AppShell>
  );
};

export default Layout;
