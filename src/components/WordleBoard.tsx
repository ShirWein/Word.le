import React, {useState, useEffect} from "react";
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
    }, []) 

    useEffect((): void => {
        let hasWon: boolean = guesses.filter((guess: string): boolean => guess == solution).length > 0 ? true : false; 
        let realGuesses: string[] = guesses.filter((guess: string): string => guess && guess);
        if (hasWon) {
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
            <WordleKeyboard />
            {/* <WordleKeyboard onClickProp={handleOnClick}/> */}
        </div>
    )
}

export default WordleBoard;

