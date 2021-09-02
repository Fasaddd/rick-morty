import React, {FC, ReactElement} from 'react';
import {CharacterType} from '../../adapters/types';
import {CharacterDetails} from './CharacterDetails/CharacterDetails';
import './Character.scss';

type Props = {
    character?: CharacterType | null;
}

const Character: FC<Props> = ({character}): ReactElement => {
    return (
        <div className="character">
            <div>
                <img className="character-image" src={character?.image} alt="character-image"/>
            </div>
            <div>
                <CharacterDetails character={character}/>
            </div>
        </div>
    )
}

export {Character};