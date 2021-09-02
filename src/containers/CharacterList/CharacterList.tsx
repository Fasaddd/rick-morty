import React, {FC, ReactElement, useMemo} from 'react';
import {CharacterItem} from './CharacterItem/CharacterItem';
import {useCharacterState} from '../../store/characters';
import storageService from '../../services/StorageService';
import {setActiveCharacter, setAllCharacters} from '../../store/characters/actions';
import './CharacterList.scss';
import {CharacterType} from '../../adapters/types';
import {v4 as uuidV4} from 'uuid';

const CharacterList: FC = (): ReactElement => {

    const {state, dispatch} = useCharacterState();
    const {characters, activeCharacter, loading} = state;

    const handleSetActiveCharacter = (character: CharacterType) => {
        dispatch(setActiveCharacter(character));
    }

    const handleRemoveCharacter = (character: CharacterType) => {
        const resultData = storageService.removeItem(character.id);
        dispatch(setAllCharacters(resultData));
    }

    const handleCleanCharactersList = () => {
        storageService.removeAllCharacterItems();
        dispatch(setAllCharacters([]));
    }

    const isShowList = useMemo(() => {
        return characters && characters.length > 0 && !loading;
    }, [characters, loading])

    return (
        <>
            {   isShowList &&
                <div className="character-list">
                    <button onClick={handleCleanCharactersList}>Clear All</button>
                    <ul className="characters-list">
                        {characters?.map(el => (
                            <CharacterItem
                                key={uuidV4()}
                                character={el}
                                isActive={activeCharacter?.id === el.id}
                                handleRemoveCharacter={() => handleRemoveCharacter(el)}
                                handleChooseCharacter={() => handleSetActiveCharacter(el)}
                            />
                        ))}
                    </ul>
                </div>
            }
        </>
    )
}

export {CharacterList};