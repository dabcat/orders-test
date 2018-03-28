export interface Order {
    _id: string;
    referenceId: string;
    email: string;
    amount: number;
    project?: string;
    creationDate: string;
}