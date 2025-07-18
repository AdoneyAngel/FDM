declare class NClass {
    static doc: string;
    constructor();
    static all(): Promise<Object[]>;
    set(data: {
        [key: string]: any;
    }): void;
    valid(data: {
        [key: string]: any;
    }): boolean;
    static _createInstance(attributes: any): Object;
}
export default NClass;
