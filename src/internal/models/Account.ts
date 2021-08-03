import { StorageReference } from './values/StorageReference'

export interface Account {
    name: string
    address: StorageReference
    balance: string
}