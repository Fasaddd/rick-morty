import {HttpClientInterface} from '../../interfaces';
import {ApiService} from '../../service';

export default class CharacterApiService extends ApiService {

    public constructor(httpClient: HttpClientInterface, url: string = '') {
        super(httpClient, url);
    }
}