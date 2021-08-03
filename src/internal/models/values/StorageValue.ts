import { StorageReference } from "./StorageReference";

export interface StorageValue {
    /**
     * Used for primitive values, big integers, and strings.
     */
    value?: string

    /**
     * Used for storage references and null.
     */
    reference?: StorageReference

    /**
     * The type of the value. For storage references and null, this is "reference".
     */
    type?: string

    /**
     * Used for enumeration values only: it is the name of the element in the enumeration.
     */
    enumElementName?: string
}