import {ChangeEvent, FC, ReactElement, useEffect, useState} from 'react';
import './SearchInput.scss';
import storageService from '../../services/StorageService';
import {ACTIVE_CHARACTER_ID_KEY} from '../../adapters/constants';

type Props = {
    defaultValue?: string;
    loading: boolean
    onFormSubmit: (value: string) => void;
}

const SearchInput: FC<Props> = ({defaultValue = '', onFormSubmit, loading}): ReactElement => {

    const [searchValue, setSearchValue] = useState(defaultValue);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const textValue = event.target.value;
        setSearchValue(textValue);
        storageService.setValue(ACTIVE_CHARACTER_ID_KEY, textValue);
    }

    const handleSubmit = () => {
        if (!validateForm()) {
            alert('Please fill search value');
            return;
        }
        onFormSubmit(searchValue);
    }

    const validateForm = (): boolean => {
        let result = false;
        if (searchValue.trim().length > 0) {
            result = true;
        }
        return result;
    }

    useEffect(() => {
        if (!!defaultValue && defaultValue?.trim().length > 0) {
            setSearchValue(defaultValue);
            const isCachedValue = storageService.getCharacterListItem(parseInt(defaultValue));
            if (isCachedValue) {
                handleSubmit();
            }
        }
    }, [defaultValue]);

    return (
        <div className="search">
            <input
                type='number'
                name='search-input'
                value={searchValue}
                className="search-input"
                disabled={loading}
                placeholder="Enter any number"
                onChange={handleChangeInput}
            />
            <button
                disabled={loading}
                className="search-submit"
                onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    )
}

export {SearchInput};