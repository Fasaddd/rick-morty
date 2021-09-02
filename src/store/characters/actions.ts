//actions for requesting character by id
import {Dispatch} from 'react';
import Api from '../../adapters/api';
import {CharacterType} from '../../adapters/types';
import storageService from '../../services/StorageService';

export const GET_CHARACTER_BY_ID_REQUESTED = 'GET_CHARACTER_REQUESTED';
export const GET_CHARACTER_BY_ID_SUCCESS = 'GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_BY_ID_FAILED = 'GET_CHARACTER_FAILED';

export const SET_ACTIVE_CHARACTER = 'SET_ACTIVE_CHARACTER';

export const SET_ALL_CHARACTERS = 'SET_ALL_CHARACTERS';


export const getCharacterById = (id: number) => {
    return async (dispatch: Dispatch<{ type: string, payload?: CharacterType | CharacterType[], error?: any }>) => {
        dispatch({type: GET_CHARACTER_BY_ID_REQUESTED});
        try {
            const response = await Api.character.get(id);
            const data = response.data;
            const allCharacters = storageService.addCharacterItem(data);
            dispatch({type: SET_ALL_CHARACTERS, payload: allCharacters});
            dispatch({type: GET_CHARACTER_BY_ID_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: GET_CHARACTER_BY_ID_FAILED, error});
        }
    }
};


export const setActiveCharacter = (character: CharacterType) => {
    return (dispatch: Dispatch<{ type: string, payload: CharacterType }>) => {
        dispatch({type: SET_ACTIVE_CHARACTER, payload: character});
    }
}

export const setAllCharacters = (characters: CharacterType[]) => {
    return (dispatch: Dispatch<{ type: string, payload: CharacterType[] | null }>) => {
        dispatch({type: SET_ALL_CHARACTERS, payload: characters});
        if (characters.length === 0) {
            dispatch({type: SET_ACTIVE_CHARACTER, payload: null});
        }
    }
}