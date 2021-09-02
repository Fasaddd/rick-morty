import React, {FC, ReactElement} from 'react';
import './EmptyCharacter.scss';
import Spinner from '../Spinner/Spinner';
import {CHARACTER_NOT_FOUND} from '../../store/characters/actions';

type Props = {
    loading: boolean;
    error: any;
}

const EmptyCharacter: FC<Props> = ({loading, error}): ReactElement => {
    return (
        <div className="empty">
            {
                loading
                    ?
                    <div className="empty-loader">
                        <Spinner/>
                    </div>
                    :
                    <div className="empty-error">
                        <img
                            src={"/assets/images/emptyCharacter.png"}
                            alt="empty-character"
                            className="empty-img"/>
                        {error === CHARACTER_NOT_FOUND && <h2 className="empty-error">Character not found</h2>}
                    </div>
            }
        </div>
    )
}

export {EmptyCharacter};