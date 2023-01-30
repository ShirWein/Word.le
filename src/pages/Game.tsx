import WordleBoard  from '../components/WordleBoard';
import { Navbar } from '../components/Navbar';

export function Game () {
    
    return (
        <div className='game'>
                <Navbar/>
                    <WordleBoard />
        </div>
        
    )
}