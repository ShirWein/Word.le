import { Routes, Route } from 'react-router-dom';
import {Game} from './pages/Game';
import {Welcome} from './pages/Welcome';

const Main = () => {
return (         
    <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/game' element={<Game/>} />
  </Routes>
);
}
export default Main;