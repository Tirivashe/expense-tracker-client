import { Button, NumberInput, Select, Stack, Text, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { FC, useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdClose, MdDateRange } from "react-icons/md";
import { addTransactionSchema } from "../../pages/transactions/schema";
import { useCreateTransactionMutation } from "../../redux/api/transaction";
import { Categories } from "../../types";

type Props = {};

type AddTransactionFieldValues = {
  name: string;
  expense: number;
  createdAt: Date;
  category: Categories;
};

const AddTransactionForm: FC<Props> = () => {
  const [createTransaction, { isLoading, isSuccess, isError }] =
    useCreateTransactionMutation();
   const {
     getInputProps,
     onSubmit
   } = useForm<AddTransactionFieldValues>({
     initialValues: {
       name: "",
       expense: 0,
       createdAt: new Date(),
       category: Categories.PRODUCTS,
     },
     validate: zodResolver(addTransactionSchema),
   });

   const handleAddTransactionSubmit = (values: AddTransactionFieldValues) => {
     createTransaction({
       name: values.name,
       category: values.category,
       expense: values.expense,
       createdAt: values.createdAt,
     });
   };

   useEffect(() => {
     if (isLoading) {
       showNotification({
         id: "update-notification",
         title: "Adding Transaction...",
         message: "Please wait while we add your transaction",
         loading: isLoading,
         autoClose: isSuccess,
         disallowClose: true,
       });
     }
     if (isSuccess) {
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
     if (isError) {
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
   }, [isLoading, isSuccess, isError])

  return (
    <Stack sx={{ width: "inherit" }}>
      <Text size={23}>Add a Transaction</Text>
      <form onSubmit={onSubmit(handleAddTransactionSubmit)}>
        <Stack>
          <TextInput
            variant="filled"
            placeholder="Title"
            {...getInputProps("name")}
          />
          <NumberInput
            variant="filled"
            placeholder="Expense"
            defaultValue={0}
            precision={2}
            parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value ?? ""))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
            {...getInputProps("expense")}
          />
          <DatePicker
            variant="filled"
            placeholder="Pick Date"
            inputFormat="MM/DD/YYYY"
            defaultValue={new Date()}
            rightSection={<MdDateRange />}
            {...getInputProps("createdAt")}
          />
          <Select
            placeholder="Products"
            defaultValue="Products"
            data={Object.values(Categories)}
            variant="filled"
            {...getInputProps("category")}
          />
        </Stack>
        <Button type="submit" mt={15}>
          Add Transaction
        </Button>
      </form>
    </Stack>
  );
};

export default AddTransactionForm;
