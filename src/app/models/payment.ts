export interface Payment {
    orderId: string;
    transactions: Array<PaymentDetails>
}

export interface PaymentDetails {
    transactionId: string;
    match: {
        isExact: boolean,
        details: {
            isEmailMatched: boolean,
            isAmountMatched: boolean,
            referenceIdStatus: string;
        }
    }
}