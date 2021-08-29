import {StorageInterface} from './apiclient/interfaces';


class Storage implements StorageInterface {

    public set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get(key: string, default_value: any = null): any {
        try {
            return JSON.parse(localStorage.getItem(key) || '') || default_value;
        } catch (e) {
            return localStorage.getItem(key) || default_value;
        }
    }

    public has(key: string): boolean {
        return localStorage.getItem(key) !== null
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}

export default new Storage();