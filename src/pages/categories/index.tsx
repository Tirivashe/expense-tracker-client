import { Button, Group, Stack, Text } from '@mantine/core'
import React, { FC, useCallback, useState } from 'react'
import { FilterSelector, Transaction } from '../../components';
import { Categories, TransactionType } from '../../types';

type Props = {}

const timeSpanOptions = [
  { label: "Last 7 days", value: "7"},
  { label: "Last 28 days", value: "28"},
  { label: "Last 90 days", value: "90"},
  { label: "Last 365 days", value: "365"},
]

const categoriesOptions = [
  { label: "All", value: "All"},
  { label: "Products", value: Categories.PRODUCTS},
  { label: "Entertainment", value: Categories.ENTERTAINMENT},
  { label: "Bills", value: Categories.BILLS},
  { label: "Other", value: Categories.OTHER},
]

const sortByOptions = [
  { label: "date", value: "date"},
  { label: "price", value: "price"}
]

const orderOptions = [
  { label: "asc", value: "asc" },
  { label: "desc", value: "desc"},
];

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
]

const CategoriesPage: FC<Props> = () => {
  const [filterValues, setFilterValues] = useState({
    timeSpan: "7",
    category: "Products",
    sortBy: "date",
    order: "asc"
  })

  const setStateValues = useCallback(( value: string | null, fieldName: string ) => {
    setFilterValues(prev => ({...prev, [fieldName]: value}))
  }, [])

  return (
    <Stack mx={60} align="start">
      <Text size={25}>Categories</Text>
      <Group position="left" spacing="lg">
        <FilterSelector
          setFilterValues={setStateValues}
          options={timeSpanOptions}
          mainLabel="Time Span:"
          name="timeSpan"
        />
        <FilterSelector
          setFilterValues={setStateValues}
          options={categoriesOptions}
          mainLabel="Categories:"
          name="category"
        />
        <FilterSelector
          setFilterValues={setStateValues}
          options={sortByOptions}
          mainLabel="Sort By:"
          name="sortBy"
        />
        <FilterSelector
          setFilterValues={setStateValues}
          options={orderOptions}
          mainLabel="Order:"
          name="order"
        />
      </Group>
      <Button mt={25} onClick={() => console.log(filterValues)}>
        Show Results
      </Button>
      <Stack justify="start" sx={{ width: "90%" }}>
        {transactions.map((transaction) => (
          <Transaction key={transaction.name} transaction={transaction} />
        ))}
      </Stack>
    </Stack>
  );
}

export default CategoriesPage