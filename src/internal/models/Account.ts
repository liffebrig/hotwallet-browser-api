import {Network} from "./Network";

export interface Account {
    name: string
    address: string
    balance: string
    balanceRed: string
    reference: string
    publicKey: string
    network: Network
}