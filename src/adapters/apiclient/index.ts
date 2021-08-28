import {ApiClientConfig, HttpClientInterface, StorageInterface} from './interfaces';
import axios from 'axios';
import CharacterService from './apiServices/character/character';
import {ApiService} from './service';


export default class ApiClient {

    public readonly httpClient: HttpClientInterface;
    private readonly storage: StorageInterface;

    private readonly config: ApiClientConfig;

    public readonly character: CharacterService;

    /**
     * @param config
     * @param storageManager
     */
    public constructor(config: ApiClientConfig, storageManager: StorageInterface) {
        this.httpClient = axios.create({
            baseURL: config.baseUrl,
            responseType: "json",
            headers: {
                Accept: 'application/json'
            }
        });

        this.storage = storageManager;
        this.config = config;

        //bind public apiServices
        this.character = new ApiService(this.httpClient, '/character');

    }
}