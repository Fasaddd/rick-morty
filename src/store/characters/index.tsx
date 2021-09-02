import {useContext} from 'react';
import {DispatchContext, StoreContext} from './reducer';

const useCharacterState = () => {
    const _dispatch = useContext(DispatchContext);
    const state = useContext(StoreContext);

    const dispatch = (action: Function) => {
        action(_dispatch);
    }

        return {state, dispatch};
}

export {useCharacterState};