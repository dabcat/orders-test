export interface Transaction {
    _id: number;
    walletId: string;
    amount: number;
    message?: string;
}