import { Categories } from "../../../types";

export interface CreateTransactionDto {
  name: string,
  expense: number,
  category: Categories,
  createdAt: Date
}