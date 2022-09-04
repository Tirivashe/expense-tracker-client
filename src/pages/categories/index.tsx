import { Button, Stack, Text } from "@mantine/core";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { FC, useCallback, useState } from "react";
import { Transaction, TransactionFilter } from "../../components";
import { useGetFilteredTransactionsQuery } from "../../redux/api/transaction";
type Props = {};

const CategoriesPage: FC<Props> = () => {
  const [filterValues, setFilterValues] = useState({
    timeSpan: "7",
    category: "PRODUCTS",
    sortBy: "createdAt",
    order: "asc",
  });
  const [entriesToSubmit, setEntriesToSubmit] = useState<{
    timeSpan: string;
    category: string;
    sortBy: string;
    order: string;
  } | null>(null);
  const {
    data: transactions,
    isLoading,
    isError,
  } = useGetFilteredTransactionsQuery(entriesToSubmit ?? skipToken);

  const setStateValues = useCallback(
    (value: string | null, fieldName: string) => {
      setFilterValues((prev) => ({ ...prev, [fieldName]: value }));
    },
    []
  );

  const submitEntries = () => {
    setEntriesToSubmit(filterValues);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Something wrong happened</Text>;

  return (
    <Stack mx={60} align="start">
      <Text size={25}>Categories</Text>
      <TransactionFilter setStateValues={setStateValues} />
      <Button mt={25} onClick={submitEntries}>
        Show Results
      </Button>
      <Stack justify="start" sx={{ width: "90%" }}>
        {transactions?.map((transaction) => (
          <Transaction key={transaction.name} transaction={transaction} />
        ))}
      </Stack>
    </Stack>
  );
};

export default CategoriesPage;
