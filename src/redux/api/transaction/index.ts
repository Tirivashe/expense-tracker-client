import { api } from "..";
import { CategorySummary, TransactionType } from "../../../types";
import { CreateTransactionDto } from "../dto/create-transaction.dto";
import { DeletingTransactionsDto } from "../dto/delete-transactions.dto";

export const transactionApiSlice = api
  .enhanceEndpoints({
    addTagTypes: ["Transactions", "CategorySummary", "FilteredTransactions"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAllTransactions: build.query<TransactionType[], void>({
        query: () => "/transactions",
        keepUnusedDataFor: 60 * 2,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({
                  type: "Transactions" as const,
                  id,
                })),
                { type: "Transactions", id: "LIST" },
              ]
            : [{ type: "Transactions", id: "LIST" }],
      }),
      getFilteredTransactions: build.query<TransactionType[], { timeSpan: string; category: string; sortBy: string; order: string }>({
        query: ({ timeSpan, category, sortBy, order }) => `/transactions/?timeSpan=${timeSpan}&order=${order}&sortBy=${sortBy}&category=${category}`,
        keepUnusedDataFor: 60 * 2,
        providesTags: (_result) => [{ type: "FilteredTransactions", id: "LIST" }],
      }),
      getCategorySummary: build.query<CategorySummary[], void>({
        query: () => "/transactions/category-sum",
        keepUnusedDataFor: 60 * 2,
        providesTags: (_result) => [{ type: "CategorySummary", id: "LIST" }],
      }),
      createTransaction: build.mutation<TransactionType, CreateTransactionDto>({
        query: (credentials) => ({
          url: "/transactions",
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: [
          { type: "Transactions", id: "LIST" },
          { type: "CategorySummary", id: "LIST" },
          { type: "FilteredTransactions", id: "LIST" }
        ],
      }),
      getTransactionsToDelete: build.mutation<TransactionType[], DeletingTransactionsDto>({
        query: (body) => ({
          url: "/transactions/delete-transactions",
          method: "POST",
          body,
        }),
      }),
      deleteTransaction: build.mutation<{ message: string }, string>({
        query: (id) => ({
          url: `/transactions/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: (_result, _error, args) => [
          { type: "Transactions", id: args },
          { type: "CategorySummary", id: "LIST" },
        ],
      }),
    }),
  });

export const {
  useGetAllTransactionsQuery,
  useGetCategorySummaryQuery,
  useGetFilteredTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useGetTransactionsToDeleteMutation,
} = transactionApiSlice;
