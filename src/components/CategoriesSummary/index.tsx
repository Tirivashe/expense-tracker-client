import { Group, Stack, Text } from '@mantine/core'
import React, { FC } from 'react'
import { Categories, CategorySummary } from '../../types'
import { Category } from "../../components"

type Props = {}

// TODO: Fetch this information/array from database
const categorySummary: CategorySummary[] = [
  {
    name: Categories.PRODUCTS,
    totalExpense: 200.00
  },
  {
    name: Categories.ENTERTAINMENT,
    totalExpense: 120.00
  },
  {
    name: Categories.BILLS,
    totalExpense: 300
  },
  {
    name: Categories.OTHER,
    totalExpense: 400
  }
]

const CategoriesSummary: FC<Props> = () => {
  return (
    <Stack mt={35}>
      <Text sx={theme => ({ fontSize: theme.fontSizes.xl })}>Categories Last 30 Days</Text>
      <Group position="left" spacing="sm" grow sx={{ width: "90%" }}>
        {categorySummary.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </Group>
    </Stack>
  );
}

export default CategoriesSummary