import React, {FC, ReactElement} from 'react';
import './EmptyCharacter.scss';
import Spinner from '../Spinner/Spinner';

type Props = {
    loading: boolean;
}

const EmptyCharacter: FC<Props> = ({loading}): ReactElement => {
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
                        <h2 className="empty-error">Character not found</h2>
                    </div>
            }
        </div>
    )
}

export
{
    EmptyCharacter
}
    ;