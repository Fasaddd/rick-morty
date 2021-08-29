import React, {FC, ReactElement} from 'react';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
import {StateProvider} from '../../store/characters/reducer';

const App: FC = (): ReactElement => {
  return (
      <>
          <StateProvider>
              <LayoutWrapper>
                  <h1>hello my dear</h1>
              </LayoutWrapper>
          </StateProvider>
      </>
  );
}

export default App;
