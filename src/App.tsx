import React from 'react';
import * as Components from './App.styles';
import { Character } from './components/Character';

const App = () => {
  return (
      <Components.Container>
        <Components.Map>
            <Character x={5} y={0}/>
        </Components.Map>
      </Components.Container>
  );
}

export default App;
