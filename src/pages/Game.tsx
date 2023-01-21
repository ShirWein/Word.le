import react, {useState} from 'react';
import WordleBoard  from '../components/WordleBoard';
import { Navbar } from '../components/Navbar';
// import { MyGlobalContext } from '../context/inputField';


export function Game () {

    // const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);
    

    return (
        <div className='game'>
                <Navbar/>
                    <WordleBoard />
        </div>
        
    )
}