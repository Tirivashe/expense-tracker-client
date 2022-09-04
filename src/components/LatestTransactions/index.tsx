import { Stack, Text } from "@mantine/core";
import { Transaction } from "../../components";
import { useGetAllTransactionsQuery } from "../../redux/api/transaction";
import { FC } from "react";


const LatestTransactions: FC = () => {
  const {
    data: transactions,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllTransactionsQuery();

  if (isLoading) return <h2>Loading up transactions...</h2>;
  if (isError) return <h2>Something went terribly wrong</h2>;

  if (isSuccess)
    return (
      <Stack mt={40} justify="start">
        <Text size="lg">Latest Transactions</Text>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </Stack>
    );

  return null;
};

export default LatestTransactions;
