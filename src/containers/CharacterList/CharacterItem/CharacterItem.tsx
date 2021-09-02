import React, {FC, ReactElement, useMemo} from 'react';
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

    const removeItem = (event: any) => {
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
                    className="remove-icon"
                    onClick={removeItem}
                />
            <img src={character?.image} className="character-image" alt="character-image"/>
        </div>
    )
}

export {CharacterItem};