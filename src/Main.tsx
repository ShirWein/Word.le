import { Routes, Route } from 'react-router-dom';
import {Game} from './pages/Game';
import {Welcome} from './pages/Welcome';
import LogIn from './pages/LogIn';

const Main = () => {
return (         
    <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/game' element={<Game/>} />
        <Route path='/login' element={<LogIn/>} />
  </Routes>
);
}
export default Main;