import React, {createContext, FC, ReactNode, useReducer} from 'react';
import {
    GET_CHARACTER_BY_ID_FAILED,
    GET_CHARACTER_BY_ID_REQUESTED,
    GET_CHARACTER_BY_ID_SUCCESS
} from './actions';
import {Character} from '../../adapters/types';


export type CharactersStateType = {
    loading: boolean;
    characters: Character[],
    error: any,
}

const initialState: CharactersStateType = {
    loading: false,
    characters: [],
    error: null,
};

const StoreContext = createContext(initialState);
const DispatchContext = createContext({});

type Props = {
    children: ReactNode
}

const StateProvider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer((state = initialState, action: any) => {
        switch (action.type) {
            case GET_CHARACTER_BY_ID_REQUESTED:
                return {
                    ...state,
                    loading: true
                };
            case GET_CHARACTER_BY_ID_FAILED:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                }
            case GET_CHARACTER_BY_ID_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    characters: action.payload
                }
            default:
                return state;
        }

    }, initialState);

    return (
        <>
            <DispatchContext.Provider value={dispatch}>
                <StoreContext.Provider value={state}>
                    {children}
                </StoreContext.Provider>
            </DispatchContext.Provider>
        </>
    )
};

export {DispatchContext, StoreContext, StateProvider};