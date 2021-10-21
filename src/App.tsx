import { useEffect } from 'react';
import * as Components from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter();

  useEffect(() => {
     window.addEventListener('keydown', handleKeyDown)
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.code) {
            case 'KeyA':
            case 'ArrowLeft':
                char.moveLeft();
                break;
            case 'KeyW':
            case 'ArrowUp':
                char.moveTop()
                break;
            case 'KeyD':
            case 'ArrowRight':
                char.moveRight()
                break;
            case 'KeyS':
            case 'ArrowDown':
                char.moveDown()
                break;

        }
  }

  return (
      <Components.Container>
        <Components.Map>
            <Character x={char.x} y={char.y}/>
        </Components.Map>
      </Components.Container>
  );
}

export default App;
