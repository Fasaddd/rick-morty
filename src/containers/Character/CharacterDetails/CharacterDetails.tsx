import React, {FC, ReactElement, useCallback} from 'react';
import {
    CharacterDisplayedDetails,
    CharacterStatuses,
    CharacterType,
    CharacterUnknownDetails
} from '../../../adapters/types';
import {v4 as uuidV4} from 'uuid';
import './CharacterDetails.scss';

type Props = {
    character?: CharacterType | null;
}

const UNKNOWN_CLASS = 'unknown';
const DETAIL_ITEM_DESCRIPTION = 'item-description';
const DEAD_CLASS = 'dead';
const ALIVE_CLASS = 'alive';

const CharacterDetails: FC<Props> = ({character}): ReactElement => {

    const getItemDescriptionClasses = useCallback((value: string, key: string): string => {
        const classes: string[] = [DETAIL_ITEM_DESCRIPTION];
        if (value === CharacterUnknownDetails.UNKNOWN || value === CharacterUnknownDetails.EMPTY) {
            classes.push(UNKNOWN_CLASS)
        }
        if (key === CharacterDisplayedDetails.STATUS && value === CharacterStatuses.DEAD) {
            classes.push(DEAD_CLASS);
        } else if (key === CharacterDisplayedDetails.STATUS && value === CharacterStatuses.ALIVE) {
            classes.push(ALIVE_CLASS);
        }

        return classes.join(' ');
    }, [character]);

    const renderDetailsList = useCallback((character: CharacterType): ReactElement => {
        const displayedDetails: string[] = Object.values(CharacterDisplayedDetails);
        return (
            <>
                {
                    Object.entries(character)
                        .map(([key, value]) => {
                            if (displayedDetails.indexOf(key) > -1 && !Array.isArray(value)) {
                                const textValue = typeof value === 'object' ? value.name : value;
                                return (
                                    <li className="details-list-item" key={uuidV4()}>
                                        <p className="item-title">{key}</p>
                                        <p className={getItemDescriptionClasses(textValue.toString(), key)}>{textValue}</p>
                                    </li>
                                )
                            }
                            return <></>
                        })
                }
            </>
        )

    }, [character])

    return (
        <div className="character-details">
            <h1 className="character-details-title">{character?.name}</h1>
            <div className="character-details-information" >
                <ul className="details-list">
                    {character && renderDetailsList(character)}
                </ul>
            </div>
        </div>
    )
}

export {CharacterDetails};