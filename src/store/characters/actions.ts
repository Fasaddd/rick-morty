//actions for requesting character by id
import {Dispatch} from 'react';
import Api from '../../adapters/api';

export const GET_CHARACTER_BY_ID_REQUESTED = 'GET_CHARACTER_REQUESTED';
export const GET_CHARACTER_BY_ID_SUCCESS = 'GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_BY_ID_FAILED = 'GET_CHARACTER_FAILED';



export const getCharacterById = (id: number) => {
    return async (dispatch: Dispatch<any>) => {
            dispatch({type: GET_CHARACTER_BY_ID_REQUESTED});
        try {
            const data = await Api.character.get(id);
            dispatch({type: GET_CHARACTER_BY_ID_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: GET_CHARACTER_BY_ID_FAILED, error});
        }
    }
};
