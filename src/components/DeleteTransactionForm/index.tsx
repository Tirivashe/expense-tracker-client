import { Button, Stack, Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { GetInputProps, OnSubmit } from "@mantine/form/lib/types";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, MutationDefinition } from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { FC } from "react";
import { MdDateRange } from "react-icons/md";
import { DeleteTransactionFieldValues } from "../../pages/transactions";
import { DeletingTransactionsDto } from "../../redux/api/dto/delete-transactions.dto";
import { TransactionType } from "../../types";

type Props = {
  getInputProps: GetInputProps<DeleteTransactionFieldValues>;
  onSubmit: OnSubmit<DeleteTransactionFieldValues>;
  showTransactionsToDelete: MutationTrigger<
    MutationDefinition<
      DeletingTransactionsDto,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, {}>,
      "Transactions" | "CategorySummary" | "FilteredTransactions",
      TransactionType[],
      "api"
    >
  >;
};

const DeleteTransactionForm: FC<Props> = ({
  getInputProps,
  onSubmit,
  showTransactionsToDelete,
}) => {
  const handleDeleteTransactionsSubmit = (
    values: DeleteTransactionFieldValues
  ) => {
    showTransactionsToDelete(values);
  };
  return (
    <Stack sx={{ width: "inherit" }}>
      <Text size={23}>Delete a Transaction</Text>
      <form onSubmit={onSubmit(handleDeleteTransactionsSubmit)}>
        <Stack>
          <DatePicker
            label="From :"
            inputFormat="MM/DD/YYYY"
            variant="filled"
            placeholder="Pick date"
            defaultValue={new Date()}
            rightSection={<MdDateRange />}
            {...getInputProps("from")}
          />
          <DatePicker
            label="To :"
            inputFormat="MM/DD/YYYY"
            variant="filled"
            placeholder="Pick date"
            defaultValue={new Date()}
            rightSection={<MdDateRange />}
            {...getInputProps("to")}
          />
        </Stack>
        <Button mt={15} type="submit">
          Show Transaction
        </Button>
      </form>
    </Stack>
  );
};

export default DeleteTransactionForm;
