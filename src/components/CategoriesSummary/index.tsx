import { Group } from '@mantine/core'
import React, { FC } from 'react'
import { Categories, CategorySummary } from '../../types'
import { Category } from "../../components"

type Props = {}

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
    <Group position="left" spacing="sm" grow sx={{ width: "90%" }}>
      {categorySummary.map(category => (
        <Category key={category.name} category={category}/>
      ))}
    </Group>
  )
}

export default CategoriesSummary