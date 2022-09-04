import { z } from "zod";

export const addTransactionSchema = z
  .object({
    name: z.string().min(1, "Please enter the name of the transaction"),
    expense: z
      .number({ invalid_type_error: "Enter a valid number" })
      .positive({ message: "Enter a valid amount" }),
    createdAt: z.date({ invalid_type_error: "Enter a valid date" }),
  })
  .refine((schema) => schema.createdAt.getTime() <= new Date().getTime(), {
    message: "Oops, this is in the future",
    path: ["createdAt"],
  });

export const deleteTransactionsSchema = z
  .object({
    from: z.date({ invalid_type_error: "Enter a valid date" }),
    to: z.date({ invalid_type_error: "Enter a valid date" }),
  })
  .refine((schema) => schema.from.getTime() <= schema.to.getTime(), {
    message: "Make sure 'from' date is sooner to 'to' date",
    path: ["to"],
  })
  .refine((schema) => schema.from.getTime() <= new Date().getTime(), {
    message: "Oops, this is in the future",
    path: ["from"],
  })
  .refine((schema) => schema.to.getTime() <= new Date().getTime(), {
    message: "Oops, this is in the future",
    path: ["to"],
  });
