import { TransactionReference } from "./TransactionReference";
export interface StorageReference {
    progressive: string;
    transaction: TransactionReference;
}
