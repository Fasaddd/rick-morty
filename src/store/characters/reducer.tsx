import React, {createContext, FC, ReactNode, useMemo, useReducer} from 'react';
import {
    GET_CHARACTER_BY_ID_FAILED,
    GET_CHARACTER_BY_ID_REQUESTED,
    GET_CHARACTER_BY_ID_SUCCESS, SET_ACTIVE_CHARACTER, SET_ALL_CHARACTERS
} from './actions';
import {CharacterType} from '../../adapters/types';


export type CharactersStateType = {
    loading: boolean;
    activeCharacter: CharacterType | null;
    characters: CharacterType[],
    error: any,
}

const initialState: CharactersStateType = {
    loading: false,
    activeCharacter: null,
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
                    activeCharacter: null,
                    error: action.error
                }
            case GET_CHARACTER_BY_ID_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    activeCharacter: action.payload,
                }
            case SET_ACTIVE_CHARACTER:
                return {
                    ...state,
                    activeCharacter: action.payload
                }
            case SET_ALL_CHARACTERS:
                return {
                    ...state,
                    characters: [...action.payload]
                }
            default:
                return state;
        }

    }, initialState);

    const dispatchContext = useMemo(() => dispatch, [dispatch]);
    const stateContext = useMemo(() => state, [state]);

    return (
        <>
            <DispatchContext.Provider value={dispatchContext}>
                <StoreContext.Provider value={stateContext}>
                    {children}
                </StoreContext.Provider>
            </DispatchContext.Provider>
        </>
    )
};

export {DispatchContext, StoreContext, StateProvider};