import { create } from "zustand";
import { balanceHistory } from "@/shared/mock/balance-history";
import { Account, Activity, Balance, Expense, Transaction } from "@/shared/types/financial";
import { accounts } from "@/shared/mock/accounts";
import { expenseStatistics } from "@/shared/mock/expense-statistics";
import { User } from "@/shared/types/user";
import { users } from "@/shared/mock/users";
import { transactions } from "@/shared/mock/transactions";
import { weeklyActivity } from "@/shared/mock/weekly-activity";

interface DashboardState {
  balanceHistory: Balance[];
  accounts: Account[];
  expenseStatistics: Expense[];
  users: User[];
  transactions: Transaction[];
  weeklyActivity: Activity[];
}

export const useDashboardStore = create<DashboardState>(() => ({
  balanceHistory,
  accounts,
  expenseStatistics,
  users,
  transactions,
  weeklyActivity,
}));
