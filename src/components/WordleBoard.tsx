import React, {useState} from "react";
import WordleInput from "./WordleInput";
import WordleKeyboard from "./WordleKeyboard";

const WordleBoard: React.FC = () : JSX.Element => {
    //* State for all guesses: 
    const [guesses, setGuess] = useState<string[]>([...Array(6)])
    return (
        <div>
            {guesses.map(
                (guess: string, i: number): JSX.Element => (
                <WordleInput index={i} key={i}  setGuesses={setGuess} guesses={guesses} />
            ))}
            <WordleKeyboard />

        </div>
    )
}

export default WordleBoard;

