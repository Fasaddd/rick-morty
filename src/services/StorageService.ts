import Api from '../adapters/api';
import {CharacterType} from '../adapters/types';

const CHARACTERS_LIST_KEY = 'characters-list-key';

class StorageService {

    getCharacterListItem(id: number) {
        const storedData: CharacterType[] =  this.getCharactersList();
        const result = storedData?.find((el => el.id === id));
        return result || null;
    }

    getCharactersList() {
        return Api.storage.get(CHARACTERS_LIST_KEY, []);
    }

    addCharacterItem(character: CharacterType) {
        const storedData: CharacterType[] = this.getCharactersList();
        storedData.push(character);
        this.setValue(CHARACTERS_LIST_KEY, storedData);
        return storedData;
    }

    removeItem(id: number) {
        const storedData: CharacterType[] = this.getCharactersList();
        const result = storedData.filter(el => el.id !== id);
        this.setValue(CHARACTERS_LIST_KEY, result);
        return result;
    }

    removeAllCharacterItems() {
        Api.storage.remove(CHARACTERS_LIST_KEY);
    }

    getItemByKey(key: string) {
        return Api.storage.get(key, null);
    }

    setValue(key: string, value: any) {
        Api.storage.set(key, value)
    }

}

const storageService = new StorageService()
export default storageService;