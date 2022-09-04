export type FormCredentials = {
  email: string,
  password: string,
}

export enum Categories {
  PRODUCTS = "PRODUCTS",
  ENTERTAINMENT = "ENTERTAINMENT",
  BILLS = "BILLS",
  OTHER = "OTHER"
}

export type CategorySummary = {
  category: Categories;
  _sum: {
    expense: number;
  };
};

export type TransactionType = {
  id: string,
  name: string,
  category: Categories,
  expense: number,
  createdAt: string
}