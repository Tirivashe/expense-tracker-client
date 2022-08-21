export type LoginFormValues = {
  loginEmail: string,
  loginPassword: string,
}

export type RegisterFormValues = {
  registerEmail: string;
  registerPassword: string;
};

export enum Categories {
  PRODUCTS = "Products",
  ENTERTAINMENT = "Entertainment",
  BILLS = "Bills",
  OTHER = "Other"
}

export type CategorySummary = {
  name: Categories,
  totalExpense: number,
}

export type Transaction = {
  name: string,
  category: Categories,
  date: Date
}