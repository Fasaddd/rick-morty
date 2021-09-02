import {FC, ReactElement, useEffect, useMemo} from 'react';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {Character} from '../Character/Character';
import {useCharacterState} from '../../store/characters';
import {getCharacterById, setActiveCharacter, setAllCharacters} from '../../store/characters/actions';
import {EmptyCharacter} from '../../components/EmptyCharacter/EmptyCharacter';
import './CharactersDashboard.scss';
import storageService from '../../services/StorageService';
import {ACTIVE_CHARACTER_ID_KEY} from '../../adapters/constants';

const CharactersDashboard: FC = (): ReactElement => {

    const {state, dispatch} = useCharacterState();
    const {activeCharacter, loading, error} = state;

    const getStoredItem = (itemId: number) => {
        return storageService.getCharacterListItem(itemId);
    }

    const handleSubmitForm = (value: string) => {
        const searchedValue = parseInt(value);
        const storedItem = getStoredItem(searchedValue);
        if (!storedItem) {
            dispatch(getCharacterById(searchedValue));
            return;
        }

        dispatch(setActiveCharacter(storedItem));
    }

    const isShowCharacter = useMemo(() => {
        return !!activeCharacter && !loading;
    }, [activeCharacter, loading]);

    const getDefaultValue = useMemo(() => {
        const activeId = storageService.getItemByKey(ACTIVE_CHARACTER_ID_KEY);
        return activeId;
    }, []);

    const fetchLocalStorage = () => {
        const allCharacters = storageService.getCharactersList();
        dispatch(setAllCharacters(allCharacters));
    }

    useEffect(() => {
        fetchLocalStorage();
    }, []);


    return (
        <div className="character-dashboard">
            <>
                <SearchInput
                    defaultValue={getDefaultValue}
                    loading={loading}
                    onFormSubmit={handleSubmitForm}/>
            </>
            <div className="details-information">
                {
                    isShowCharacter
                        ? <Character character={activeCharacter}/>
                        : <EmptyCharacter error={error} loading={loading}/>
                }
            </div>
        </div>
    )
}
export {CharactersDashboard};