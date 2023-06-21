import { Button, Group } from '@mantine/core'
import React, { FC } from 'react'
import { TransactionType } from '../../types'
import { Transaction }from '../../components'
import { BsTrash } from 'react-icons/bs'
import { useDeleteTransactionMutation } from '../../redux/api/transaction'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, MutationDefinition } from '@reduxjs/toolkit/dist/query'
import { DeletingTransactionsDto } from '../../redux/api/dto/delete-transactions.dto'

type Props = {
  transactions: TransactionType[];
  formValues: { from: Date; to: Date };
  refetch: MutationTrigger<
    MutationDefinition<
      DeletingTransactionsDto,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, {}>,
      "Transactions" | "CategorySummary",
      TransactionType[],
      "api"
    >
  >;
};

const DeleteTransactionList: FC<Props> = ({ transactions, formValues, refetch }) => {
  const [deleteTransaction, { isLoading }] = useDeleteTransactionMutation()

  const handleDelete = (id: string) => {
    deleteTransaction(id)
    refetch(formValues)
  }

  return (
    <Group sx={{ width: "70vw" }}>
      {transactions.map((transaction) => (
        <Group key={transaction.id}>
          <Transaction transaction={transaction} />
          <Button color="red" loading={isLoading} onClick={() => handleDelete(transaction.id)}>
            <BsTrash size={20} />
          </Button>
        </Group>
      ))}
    </Group>
  );
}

export default DeleteTransactionList