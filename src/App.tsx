import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
import './App.css';
import { Welcome } from './pages/Welcome';
import { Game } from './pages/Game';
import WordleBoard from './components/WordleBoard';


function App() {

  return (
    <>
    <div className="App">
      
      <Main />
    </div>
    </> 
  );
}

export default App;
