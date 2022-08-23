import { Categories } from "../types";

import { BiCube } from "react-icons/bi";
import { GiGamepad } from "react-icons/gi";
import { BsHouse } from "react-icons/bs";
import { TbFlame } from "react-icons/tb";
import { MantineTheme } from "@mantine/core";

export function renderColor(category: Categories, theme: MantineTheme) {
  switch (category) {
    case Categories.PRODUCTS:
      return { color: theme.colors.yellow[6], Icon: BiCube };
    case Categories.ENTERTAINMENT:
      return { color: theme.colors.lime[6], Icon: GiGamepad };
    case Categories.BILLS:
      return { color: theme.colors.blue[4], Icon: BsHouse };
    default:
      return { color: theme.colors.pink[4], Icon: TbFlame };
  }
}
