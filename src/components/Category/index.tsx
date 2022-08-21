import { Center, MantineTheme, Paper, Space, Stack, Text, useMantineTheme } from "@mantine/core";
import { FC, } from "react";
import { BiCube } from "react-icons/bi";
import { GiGamepad } from "react-icons/gi"
import { BsHouse } from "react-icons/bs";
import { TbFlame } from "react-icons/tb";
import { Categories, CategorySummary } from "../../types";
import { useStyles } from "./styles";

type Props = {
  category: CategorySummary;
};

function renderColor(category: Categories, theme: MantineTheme) {
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

const Category: FC<Props> = ({ category }) => {
  const theme = useMantineTheme();
  const { color, Icon } = renderColor(category.name, theme);
  const { classes } = useStyles({ color })
  
  return (
    <Paper className={classes.root}>
      <Center style={{ width: 30 }}>
        <Icon color="white" size="30px"/>
      </Center>
      <Space w={40}/>
      <Stack
        justify="center"
        sx={{ color: "white" }}
        spacing={0}
      >
        <Text size="sm">{category.name}</Text>
        <Text size="xs">-${category.totalExpense}</Text>
      </Stack>
    </Paper>
  );
};

export default Category;
