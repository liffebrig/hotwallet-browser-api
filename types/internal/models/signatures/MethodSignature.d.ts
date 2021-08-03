export interface MethodSignature {
    instanceMethod: boolean;
    voidMethod: boolean;
    definingClass: string;
    methodName: string;
    returnType?: string;
    formals: Array<string>;
}
