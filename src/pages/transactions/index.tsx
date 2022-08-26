import {
  Button,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { FC } from "react";
import { z } from "zod";
import { Categories } from "../../types";
import { MdDateRange } from "react-icons/md";

type Props = {};

type AddTransactionFieldValues = {
  name: string;
  expense: number;
  date: Date;
  category: Categories;
};

type DeleteTransactionFieldValues = {
  from: Date;
  to: Date;
};

const addTransactionSchema = z
  .object({
    name: z.string().min(1, "Please enter the name of the transaction"),
    expense: z
      .number({ invalid_type_error: "Enter a valid number" })
      .positive({ message: "Enter a valid amount" }),
    date: z.date({ invalid_type_error: "Enter a valid date" }),
  })
  .refine((schema) => schema.date.getTime() <= new Date().getTime(), {
    message: "Oops, this is in the future",
    path: ["date"],
  });

//Todo: make sure the from date is smaller that to date and that both dates do not exceed current moment
const deleteTransactionsSchema = z
  .object({
    from: z.date({ invalid_type_error: "Enter a valid date" }),
    to: z.date({ invalid_type_error: "Enter a valid date" }),
  })
  .refine((schema) => schema.from.getTime() <= schema.to.getTime(), {
    message: "Make sure 'from' date is sooner to 'to' date",
    path: ["to"],
  }).refine(schema => schema.from.getTime() <= new Date().getTime(), {
    message: "Oops, this is in the future",
    path: ["from"]
  }).refine(schema => schema.to.getTime() <= new Date().getTime(), {
    message: "Oops, this is in the future",
    path: ["to"]
  })

const TransactionsPage: FC<Props> = () => {
  const {
    getInputProps: addTransactionInputProps,
    onSubmit: onSubmitAddTransaction,
  } = useForm<AddTransactionFieldValues>({
    initialValues: {
      name: "",
      expense: 0,
      date: new Date(),
      category: Categories.PRODUCTS,
    },
    validate: zodResolver(addTransactionSchema),
  });

  const {
    getInputProps: getDeleteTransactionsProps,
    onSubmit: onSubmitDeleteTransactions,
  } = useForm<DeleteTransactionFieldValues>({
    initialValues: {
      from: new Date(),
      to: new Date(),
    },
    validate: zodResolver(deleteTransactionsSchema),
  });

  const handleAddTransactionSubmit = (values: AddTransactionFieldValues) => {
    console.log("Add transaction: ", {
      ...values,
      date: values.date.toISOString(),
    });
  };

  const handleDeleteTransactionsSubmit = (
    values: DeleteTransactionFieldValues
  ) => {
    console.log("Add transaction: ", values);
  };

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
              {...addTransactionInputProps("date")}
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
    </Stack>
  );
};

export default TransactionsPage;
