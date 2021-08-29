import React, {FC, ReactElement} from 'react';

type Props = {
    loading: boolean;
}

const Spinner: FC<Props> = ({loading}): ReactElement => {
    return (
        <div className="spinner"/>
    )
}

export default Spinner;