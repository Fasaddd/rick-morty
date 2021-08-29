export interface ApiClientConfig {
    baseUrl: string;
    responseType?: ResponseType;
    onError?: (error: any) => Promise<any>;
    onSuccess?: (response: any) => any;
}

export interface StorageInterface {
    set(key: string, value: any): void;
    get(key: string, default_value: any): any;
    has(key: string): boolean;
    remove(key: string): void
}

export interface HttpClientInterface {
    get(url: string, config?: any): Promise<any>;
}

export interface ApiServiceInterface {
    get(params: any | number): Promise<any>;
}