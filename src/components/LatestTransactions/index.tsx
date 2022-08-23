import { Stack, Text } from '@mantine/core'
import React from 'react'
import { Categories, Transaction as TransactionType } from '../../types'
import { Transaction } from "../../components"

type Props = {}

const transactions: TransactionType[] = [
  {
    name: "Hi",
    category: Categories.PRODUCTS,
    expense: 2110,
    createdAt: new Date(),
  },
  {
    name: "Test",
    category: Categories.BILLS,
    expense: 205,
    createdAt: new Date(),
  },
  {
    name: "New",
    category: Categories.ENTERTAINMENT,
    expense: 100,
    createdAt: new Date(),
  },
  {
    name: "Hello",
    category: Categories.BILLS,
    expense: 150,
    createdAt: new Date(),
  },
  {
    name: "Other",
    category: Categories.OTHER,
    expense: 200,
    createdAt: new Date(),
  },
];

const LatestTransactions = (props: Props) => {
  return (
    <Stack mt={40} justify="start" sx={{ width: "inherit" }}>
      <Text size="lg">Latest Transactions</Text>
      {transactions.map(transaction => (
        <Transaction transaction={transaction}/>
      ))}
    </Stack>
  )
}

export default LatestTransactions