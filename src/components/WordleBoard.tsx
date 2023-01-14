import React, {useState, useEffect, useRef} from "react";
import WordleInput from "./WordleInput";
import WordleKeyboard from "./WordleKeyboard";


const WordleBoard: React.FC = () : JSX.Element => {
    //* State for all guesses: 
    const [guesses, setGuess] = useState<string[]>([...Array(6)])
    const [solution, setSolution] = useState<string>("");
    const [usableWords, setUsableWords] = useState<string[]>([]) //* check if it a real word.  
    useEffect((): void => {
        let words: string[] = require('an-array-of-english-words');
        let fiveLetterWords: string[] = words.filter((word: string)=> word.length === 5);
        setUsableWords(fiveLetterWords);
        let randomNumber: number = Math.floor(Math.random() * fiveLetterWords.length-1) //* random number 0 - length of the array of words. 
        setSolution(fiveLetterWords[randomNumber]) //* set the solution randomly.  
        console.log(fiveLetterWords[randomNumber])
    }, []) 

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect((): void => {
        let hasWon: boolean = guesses.filter((guess: string): boolean => guess == solution).length > 0 ? true : false; 
        let realGuesses: string[] = guesses.filter((guess: string): string => guess && guess);
        function handleWin() {
            if(audioRef.current){
                audioRef.current.play();
            }
        }
        if (hasWon) {
            let audio = new Audio('../../public/claps-44774.mp3');
            audio.play();
            // <audio ref={audioRef} src="claps-44774.mp3"></audio>
            // handleWin();
            alert('You guess it!');
            window.location.reload() //* return everything to initial state.  
        } else if (realGuesses.length >= 6) {
            alert('You lost!');
            window.location.reload();
        }
    }, [solution, guesses])

    return (
        <div style={{marginTop: "50px"}}>
            {guesses.map(
                (guess: string, i: number): JSX.Element => (
                <WordleInput index={i} key={i}  setGuesses={setGuess} guesses={guesses} usableWords={usableWords} solution={solution}  />
            ))}           
        </div>
    )
}

export default WordleBoard;

