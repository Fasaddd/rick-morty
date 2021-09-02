import {ApiServiceInterface, HttpClientInterface} from "./interfaces";
import * as querystring from "querystring";

export class ApiService implements ApiServiceInterface {

    protected service_url: string;
    protected httpClient: HttpClientInterface;

    public constructor(httpClient: HttpClientInterface, url: string = '') {
        this.httpClient = httpClient;
        this.service_url = url;
    }

    /**
     * @param id
     * @param params
     * @param config
     */
    public get(id: any | number = {}, params?: any, config?: any): Promise<any> {
        let url: string = this.formatUrl(this.service_url, id);
        params = typeof id === 'object' ? id : params;
        if (params) {
            const query = this.toQuery(params);
            url = `${url}` + (query.length > 0 ? `?${query}` : '');
        }

        return this.httpClient.get(url, config);
    }

    protected toQuery(params: any): string {
        return querystring.stringify(params);
    }

    protected formatUrl(url: string, id: any): string {
        if (typeof id !== 'object') {
            if (url.indexOf("{id}") > 0) {
                url = url.replace("{id}", id);
            } else {
                url = `${url}/${id}`;
            }
        }

        return url;
    }
}
