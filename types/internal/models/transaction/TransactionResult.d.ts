import { StorageValue } from "../values/StorageValue";
export interface TransactionResult {
    status: boolean;
    storageValue?: StorageValue;
}
