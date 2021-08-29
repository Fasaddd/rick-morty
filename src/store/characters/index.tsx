import {useContext, useMemo} from 'react';
import {DispatchContext, StoreContext} from '../characters/reducer';

const useCharacterState = () => {
    const _dispatch = useContext(DispatchContext);
    const state = useContext(StoreContext);

    const dispatch = (action: Function) => {
        action(_dispatch);
    }

    return useMemo(() => {
        return {state, dispatch};
    }, [state, dispatch]);
}

export {useCharacterState};