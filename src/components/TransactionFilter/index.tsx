import { Group } from '@mantine/core';
import React from 'react'
import { FC } from 'react';
import { Categories } from '../../types';
import FilterSelector from '../FilterSelector';

type Props = {
  setStateValues: (value: string | null, fieldName: string) => void;
};

const timeSpanOptions = [
  { label: "Last 7 days", value: "7" },
  { label: "Last 28 days", value: "28" },
  { label: "Last 90 days", value: "90" },
  { label: "Last 365 days", value: "365" },
];

const categoriesOptions = [
  { label: "All", value: "ALL" },
  { label: "Products", value: Categories.PRODUCTS },
  { label: "Entertainment", value: Categories.ENTERTAINMENT },
  { label: "Bills", value: Categories.BILLS },
  { label: "Other", value: Categories.OTHER },
];

const sortByOptions = [
  { label: "date", value: "createdAt" },
  { label: "price", value: "expense" },
];

const orderOptions = [
  { label: "asc", value: "asc" },
  { label: "desc", value: "desc" },
];

const TransactionFilter: FC<Props> = ({ setStateValues }) => {
  return (
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
  );
}

export default TransactionFilter