import { Group, Paper, Stack, Text, useMantineTheme } from '@mantine/core';
import { format } from "date-fns"
import React, { FC } from 'react'
import { TransactionType } from '../../types'
import { renderColor } from '../../utils';

type Props = {
  transaction: TransactionType
};

const Transaction: FC<Props> = ({ transaction: { name, category, expense, createdAt } }) => {
  const date = new Date(createdAt)
  const formattedTime = format(date, "dd MMMM, yyyy")
  const theme = useMantineTheme()
  const { color, Icon } = renderColor(category, theme)
  return (
    <Paper px={25} py={15} shadow={theme.shadows.md}>
      <Group
        position="apart"
        align="start"
        sx={{ width: "inherit", height: "inherit" }}
      >
        <Group align={"start"}>
          <Icon color={color} size={25} style={{ background: theme.fn.lighten(color, 0.7) }}/>
          <Stack justify={"start"} spacing={0}>
            <Text color={theme.colors.gray[7]} size="sm">{name}</Text>
            <Text size="sm" weight="bold" transform='capitalize'>{category}</Text>
            <Text color="dimmed" size="xs">{formattedTime}</Text>
          </Stack>
        </Group>
        <Text weight="bold" size="sm">-${expense}</Text>
      </Group>
    </Paper>
  );
}

export default Transaction