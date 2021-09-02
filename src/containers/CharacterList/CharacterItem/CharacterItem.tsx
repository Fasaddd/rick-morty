import React, {FC, ReactElement, ReactEventHandler, useCallback, useMemo} from 'react';
import {CharacterType} from '../../../adapters/types';
import './CharacterItem.scss';
import {BsFillXSquareFill} from 'react-icons/all';

type Props = {
    character: CharacterType;
    isActive: boolean;
    handleChooseCharacter: () => void;
    handleRemoveCharacter: () => void;
}

const ACTIVE_CHARACTER_CLASS = 'active';

const CharacterItem: FC<Props> = ({
                                      character,
                                      isActive,
                                      handleChooseCharacter,
                                      handleRemoveCharacter
                                  }): ReactElement => {

    const removeItem = (event: Event) => {
        event.stopPropagation();
        handleRemoveCharacter();
    }

    const getItemClasses = useMemo(() => {
        const classes = ['character-item'];
        isActive && classes.push(ACTIVE_CHARACTER_CLASS);
        return classes.join(' ');
    }, [isActive])

    return (
        <div className={getItemClasses} onClick={handleChooseCharacter}>
            <BsFillXSquareFill
                onClick={handleRemoveCharacter}
                className="remove-icon"/>
            <img src={character?.image} className="character-image" alt="character-image"/>
        </div>
    )
}

export {CharacterItem};