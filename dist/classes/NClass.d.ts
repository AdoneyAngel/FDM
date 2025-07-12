declare class NClass {
    static doc: string;
    constructor();
    static all(): Promise<any[]>;
    set(data: {
        [key: string]: any;
    }): void;
    valid(data: {
        [key: string]: any;
    }): boolean;
    static _createInstance(attributes: any): any;
}
export default NClass;
