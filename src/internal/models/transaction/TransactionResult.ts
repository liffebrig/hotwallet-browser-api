import {StorageValue} from "../values/StorageValue";
import {TransactionReference} from "../values/TransactionReference";

export interface TransactionResult {
    status: boolean
    storageValue?: StorageValue,
    transaction?: TransactionReference
}