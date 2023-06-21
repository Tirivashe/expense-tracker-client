import {
  Stack,
  Text,
} from "@mantine/core";
import { useForm, zodResolver } from '@mantine/form';
import { FC} from "react";
import { useGetTransactionsToDeleteMutation } from "../../redux/api/transaction";
import { AddTransactionForm, DeleteTransactionForm, DeleteTransactionList } from "../../components"
import { deleteTransactionsSchema } from "./schema";

type Props = {};

export type DeleteTransactionFieldValues = {
  from: Date;
  to: Date;
};


const TransactionsPage: FC<Props> = () => {
  const [ showTransactionsToDelete, { data, isSuccess: isGetDeleteTransactionsSuccess, isLoading } ] = useGetTransactionsToDeleteMutation()
  const {
    getInputProps,
    onSubmit,
    values
  } = useForm<DeleteTransactionFieldValues>({
    initialValues: {
      from: new Date(),
      to: new Date(),
    },
    validate: zodResolver(deleteTransactionsSchema),
  });

  return (
    <Stack ml={50} align="start" sx={{ width: "50%" }}>
      <Text size={23}>Transactions</Text>
      <AddTransactionForm />
      <DeleteTransactionForm
        getInputProps={getInputProps}
        onSubmit={onSubmit}
        showTransactionsToDelete={showTransactionsToDelete}
        loading={isLoading}
      />
      {isGetDeleteTransactionsSuccess && data && (
        <DeleteTransactionList
          transactions={data}
          formValues={values}
          refetch={showTransactionsToDelete}
        />
      )}
    </Stack>
  );
};

export default TransactionsPage;
