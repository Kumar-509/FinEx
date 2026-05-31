// Mock Backend API Layer for FinEx
// This simulates a real backend connection

export interface Account {
  id: number;
  name: string;
  bank: string;
  number: string;
  iban: string;
  balance: number;
  type: string;
  inflow: number;
  outflow: number;
}

export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  status: string;
  account: string;
}

export interface Budget {
  id: number;
  category: string;
  spent: number;
  limit: number;
}

export interface WalletBalance {
  symbol: string;
  name: string;
  amount: number;
  rate: string;
  change: string;
}

// Mock data (would come from Node.js/Python backend)
const mockAccounts: Account[] = [
  { id: 1, name: "Main Checking", bank: "JPMorgan Chase", number: "•••• 4829", iban: "US49 CHAS 1240 0048 29", balance: 12840.5, type: "Checking", inflow: 2340, outflow: 1150 },
  { id: 2, name: "Savings Vault", bank: "Bank of America", number: "•••• 1203", iban: "US12 BOFA 0440 0120 03", balance: 24560.3, type: "High-Yield Savings", inflow: 1200, outflow: 0 },
  { id: 3, name: "Investment Account", bank: "Fidelity Investments", number: "•••• 7721", iban: "US88 FIDL 0199 0077 21", balance: 38420.0, type: "Brokerage", inflow: 800, outflow: 0 },
  { id: 4, name: "Travel Fund", bank: "Ally Financial", number: "•••• 3398", iban: "US37 ALLY 0123 4533 98", balance: 4820.65, type: "Goal Savings", inflow: 400, outflow: 620 },
];

const mockTransactions: Transaction[] = [
  { id: "TX-88291034", date: "Aug 15, 2025", merchant: "Whole Foods Market", category: "Groceries", amount: -84.23, status: "Completed", account: "Chase ••4829" },
  { id: "TX-88291001", date: "Aug 15, 2025", merchant: "Acme Inc. Payroll", category: "Income · Salary", amount: 4200.0, status: "Completed", account: "Chase ••4829" },
  { id: "TX-88290981", date: "Aug 14, 2025", merchant: "Uber", category: "Transport", amount: -22.45, status: "Completed", account: "Visa ••7721" },
  { id: "TX-88290920", date: "Aug 14, 2025", merchant: "Netflix", category: "Entertainment · Subscription", amount: -15.99, status: "Completed", account: "Visa ••7721" },
];

const mockBudgets: Budget[] = [
  { id: 1, category: "Housing", spent: 1600, limit: 1800 },
  { id: 2, category: "Food & Dining", spent: 920, limit: 1200 },
  { id: 3, category: "Transportation", spent: 420, limit: 600 },
];

const mockWallet: WalletBalance[] = [
  { symbol: "USD", name: "US Dollar", amount: 12840.5, rate: "1.00", change: "+0.00%" },
  { symbol: "EUR", name: "Euro", amount: 4320.12, rate: "1.09", change: "+0.41%" },
  { symbol: "BTC", name: "Bitcoin", amount: 0.3421, rate: "67,420", change: "+2.41%" },
];

// Simulated API calls (would be real fetch to Node/Python backend)
export const api = {
  getAccounts: async (): Promise<Account[]> => {
    await new Promise(res => setTimeout(res, 200));
    return [...mockAccounts];
  },
  getTransactions: async (): Promise<Transaction[]> => {
    await new Promise(res => setTimeout(res, 150));
    return [...mockTransactions];
  },
  getBudgets: async (): Promise<Budget[]> => {
    await new Promise(res => setTimeout(res, 180));
    return [...mockBudgets];
  },
  getWalletBalances: async (): Promise<WalletBalance[]> => {
    await new Promise(res => setTimeout(res, 120));
    return [...mockWallet];
  },
  transfer: async (_from: number, _to: number, amount: number) => {
    await new Promise(res => setTimeout(res, 400));
    return { success: true, message: `Transferred $${amount} successfully` };
  }
};
