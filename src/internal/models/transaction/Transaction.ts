import {MethodSignature} from "../signatures/MethodSignature";
import {TransactionReference} from "../values/TransactionReference";
import {StorageReference} from "../values/StorageReference";
import {StorageValue} from "../values/StorageValue";


export interface Transaction {
    smartContractAddress: TransactionReference
    methodSignature: MethodSignature
    receiver: StorageReference,
    actuals: Array<StorageValue>
    amount: string,
    name: string,
    base64DataToSign: string
}