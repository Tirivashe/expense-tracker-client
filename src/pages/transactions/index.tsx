import {
  Button,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, zodResolver } from '@mantine/form';
import { showNotification, updateNotification } from "@mantine/notifications"
import { FC, useEffect } from "react";
import { Categories } from "../../types";
import { MdDateRange } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useCreateTransactionMutation, useGetTransactionsToDeleteMutation } from "../../redux/api/transaction";
import { DeleteTransactionList } from "../../components"
import { addTransactionSchema, deleteTransactionsSchema } from "./schema";

type Props = {};

type AddTransactionFieldValues = {
  name: string;
  expense: number;
  createdAt: Date;
  category: Categories;
};

type DeleteTransactionFieldValues = {
  from: Date;
  to: Date;
};

const TransactionsPage: FC<Props> = () => {
  const [createTransaction, { isLoading, isSuccess, isError }] = useCreateTransactionMutation()
  const [ showTransactionsToDelete, { data, isSuccess: isGetDeleteTransactionsSuccess,  } ] = useGetTransactionsToDeleteMutation()
  const {
    getInputProps: addTransactionInputProps,
    onSubmit: onSubmitAddTransaction,
  } = useForm<AddTransactionFieldValues>({
    initialValues: {
      name: "",
      expense: 0,
      createdAt: new Date(),
      category: Categories.PRODUCTS,
    },
    validate: zodResolver(addTransactionSchema),
  });

  const {
    getInputProps: getDeleteTransactionsProps,
    onSubmit: onSubmitDeleteTransactions,
    values: deleteFormValues
  } = useForm<DeleteTransactionFieldValues>({
    initialValues: {
      from: new Date(),
      to: new Date(),
    },
    validate: zodResolver(deleteTransactionsSchema),
  });

  const handleAddTransactionSubmit = (values: AddTransactionFieldValues) => {
    createTransaction({ name: values.name, category: values.category, expense: values.expense, createdAt: values.createdAt });
  };

  const handleDeleteTransactionsSubmit = (
    values: DeleteTransactionFieldValues
  ) => {
    showTransactionsToDelete(values)
  };

  if(isLoading) {
    showNotification({
      id: "update-notification",
      title: "Adding Transaction...",
      message: "Please wait while we add your transaction",
      loading: isLoading,
      autoClose: isSuccess,
      disallowClose: true,
    });
  }
  if(isSuccess) {
    updateNotification({
      id: "update-notification",
      title: "Transaction Added",
      message: "Successfully added a new transaction!",
      color: "teal",
      icon: <BsCheck2 size={20} color="white" />,
      autoClose: 3500,
      disallowClose: false,
    });
  }
  if(isError) {
    updateNotification({
      id: "update-notification",
      title: "Error",
      message: "Something went wrong! Cannot add transaction",
      color: "red",
      icon: <MdClose size={20} color="white" />,
      autoClose: 5000,
      disallowClose: false,
    });
  }

  // useEffect(() => {
  //   isLoading &&
  //     showNotification({
  //       id: "update-notification",
  //       title: "Adding Transaction...",
  //       message: "Please wait while we add your transaction",
  //       loading: isLoading,
  //       autoClose: isSuccess,
  //       disallowClose: true,
  //     });
  //   isSuccess &&
  //     updateNotification({
  //       id: "update-notification",
  //       title: "Transaction Added",
  //       message: "Successfully added a new transaction!",
  //       color: "teal",
  //       icon: <BsCheck2 size={20} color="white" />,
  //       autoClose: 3500,
  //       disallowClose: false,
  //     });
  //   isError &&
  //     updateNotification({
  //       id: "update-notification",
  //       title: "Error",
  //       message: "Something went wrong! Cannot add transaction",
  //       color: "red",
  //       icon: <MdClose size={20} color="white" />,
  //       autoClose: 5000,
  //       disallowClose: false,
  //     });
  // }, [isSuccess, isError, isLoading])

  return (
    <Stack ml={50} align="start" sx={{ width: "50%" }}>
      <Text size={23}>Transactions</Text>
      <Stack sx={{ width: "inherit" }}>
        <Text size={23}>Add a Transaction</Text>
        <form onSubmit={onSubmitAddTransaction(handleAddTransactionSubmit)}>
          <Stack>
            <TextInput
              variant="filled"
              placeholder="Title"
              {...addTransactionInputProps("name")}
            />
            <NumberInput
              variant="filled"
              placeholder="Expense"
              defaultValue={0}
              parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value ?? ""))
                  ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : "$ "
              }
              {...addTransactionInputProps("expense")}
            />
            <DatePicker
              variant="filled"
              placeholder="Pick Date"
              inputFormat="MM/DD/YYYY"
              defaultValue={new Date()}
              rightSection={<MdDateRange />}
              {...addTransactionInputProps("createdAt")}
            />
            <Select
              placeholder="Products"
              defaultValue="Products"
              data={Object.values(Categories)}
              variant="filled"
              {...addTransactionInputProps("category")}
            />
          </Stack>
          <Button type="submit" mt={15}>
            Add Transaction
          </Button>
        </form>
      </Stack>
      <Stack sx={{ width: "inherit" }}>
        <Text size={23}>Delete a Transaction</Text>
        <form
          onSubmit={onSubmitDeleteTransactions(handleDeleteTransactionsSubmit)}
        >
          <Stack>
            <DatePicker
              label="From :"
              inputFormat="MM/DD/YYYY"
              variant="filled"
              placeholder="Pick date"
              defaultValue={new Date()}
              rightSection={<MdDateRange />}
              {...getDeleteTransactionsProps("from")}
            />
            <DatePicker
              label="To :"
              inputFormat="MM/DD/YYYY"
              variant="filled"
              placeholder="Pick date"
              defaultValue={new Date()}
              rightSection={<MdDateRange />}
              {...getDeleteTransactionsProps("to")}
            />
          </Stack>
          <Button mt={15} type="submit">
            Show Transaction
          </Button>
        </form>
      </Stack>
      {(isGetDeleteTransactionsSuccess && data) && 
        <DeleteTransactionList 
          transactions={data} 
          formValues={deleteFormValues} 
          refetch={showTransactionsToDelete}
        />
        }
    </Stack>
  );
};

export default TransactionsPage;
