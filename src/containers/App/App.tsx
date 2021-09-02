import React, {FC, ReactElement} from 'react';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
import {StateProvider} from '../../store/characters/reducer';
import {CharactersDashboard} from '../CharactersDashboard/CharactersDashboard';
import {CharacterList} from '../CharacterList/CharacterList';
import './App.scss';

const App: FC = (): ReactElement => {
    return (
        <>
            <StateProvider>
                <LayoutWrapper>
                    <div className="main-section">
                        <CharactersDashboard/>
                        <CharacterList/>
                    </div>
                </LayoutWrapper>
            </StateProvider>
        </>
    );
}

export default App;
