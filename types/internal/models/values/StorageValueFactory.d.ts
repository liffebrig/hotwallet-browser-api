import { StorageReference } from "./StorageReference";
import { StorageValue } from "./StorageValue";
export declare class StorageValueFactory {
    /**
     * Yields a storage value.
     * @param value the value
     * @param type the type of the value
     * @return a storage value
     */
    static newStorageValue(value: string, type: string): StorageValue;
    /**
     * Yields a null reference.
     * @return a null reference storage value
     */
    static newNullReference(): StorageValue;
    /**
     * Yields a reference storage value.
     * @param reference the reference
     * @return a reference storage value
     */
    static newReference(reference: StorageReference): StorageValue;
    /**
     * Yields an enum storage value.
     * @param enumElementName the enum name
     * @param type the type of enum
     * @return an enum storage value
     */
    static newEnum(enumElementName: string, type: string): StorageValue;
}
