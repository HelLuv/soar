export type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  prefixMask: string;
  postfixMask: string;
  institutionId: string;
  name: string;
  ownerName: string;
  type: string;
  subtype: string;
  validityDate: string;
};

export type CurrencyCode = "USD" | "EUR";

export type Currency = {
  code: CurrencyCode;
  symbol: string;
};

export type TransactionType = "deposit" | "withdrawal";
export type TransactionSource = "card" | "paypal" | "deposit" | "withdrawal";

export type Transaction = {
  id: string;
  amount: number;
  date: string;
  description: string;
  icon: string;
  currency: Currency;
  accountNumber;
  type: TransactionType;
  source: TransactionSource;
};

export type Activity = {
  id: string;
  date: string;
  deposit: number;
  withdraw: number;
};

export type Expense = {
  id: string;
  value: number;
  name: string;
  fill: string;
};

export type Balance = {
  date: string;
  value: number;
};

export type User = {
  id: string;
  fullName: string;
  description: string;
  imageUrl: string;
  city: string;
  country: string;
  dateOfBirth: Date;
  email: string;
  password: string;
  permanentAddress: string;
  postalCode: string;
  presentAddress: string;
  username: string;
};
