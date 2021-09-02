import React, {FC, ReactElement} from 'react';
import './Spinner.scss';

const Spinner: FC = (): ReactElement => {
    return (
        <div className="lds-spinner">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

export default Spinner;