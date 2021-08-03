import {MethodSignature} from "../signatures/MethodSignature";
import { StorageValue } from "../values/StorageValue";

export interface Transaction {
    caller: string
    smartContractAddress: string
    methodSignature: MethodSignature
    receiver: string,
    actuals: Array<StorageValue>
    amount: string,
    name: string
}