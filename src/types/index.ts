export type LoginFormValues = {
  loginEmail: string,
  loginPassword: string,
}

export type RegisterFormValues = {
  registerEmail: string;
  registerPassword: string;
};

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