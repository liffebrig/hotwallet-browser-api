import { StorageReference } from "./StorageReference"
import { StorageValue } from "./StorageValue"

export class StorageValueFactory {

    /**
     * Yields a storage value.
     * @param value the value
     * @param type the type of the value
     * @return a storage value
     */
    public static newStorageValue(value: string, type: string): StorageValue {
        return {
            value: value,
            type: type,
        }
    }

    /**
     * Yields a null reference.
     * @return a null reference storage value
     */
    public static newNullReference(): StorageValue {
        return {
            type: "reference"
        }
    }

    /**
     * Yields a reference storage value.
     * @param reference the reference
     * @return a reference storage value
     */
    public static newReference(reference: StorageReference): StorageValue {
        return {
            type: "reference",
            reference: reference
        }
    }

    /**
     * Yields an enum storage value.
     * @param enumElementName the enum name
     * @param type the type of enum
     * @return an enum storage value
     */
    public static newEnum(enumElementName: string, type: string): StorageValue {
        return {
            type: type,
            enumElementName: enumElementName
        }
    }
}