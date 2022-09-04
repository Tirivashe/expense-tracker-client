import { Center, Group, Paper, Space, Stack, Text, useMantineTheme } from "@mantine/core";
import { FC, } from "react";
import { CategorySummary } from "../../types";
import { renderColor } from "../../utils";
import { useStyles } from "./styles";

type Props = {
  category: CategorySummary;
};

const Category: FC<Props> = ({ category: { category, _sum: { expense } } }) => {
  const theme = useMantineTheme();
  const { color, Icon } = renderColor(category, theme);
  const { classes } = useStyles({ color })
  
  return (
    <Paper className={classes.root}>
      <Group sx={{ padding: "0.5rem 1.2rem", width: "inherit", height: "inherit"}}>
        <Center style={{ width: 30 }}>
          <Icon color="white" size="30px" />
        </Center>
        <Space w={15} />
        <Stack justify="center" sx={{ color: "white" }} spacing={0}>
          <Text size="sm">{category}</Text>
          <Text size="xs">-${expense}</Text>
        </Stack>
      </Group>
    </Paper>
  );
};

export default Category;
