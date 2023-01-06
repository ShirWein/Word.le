import React, {useState} from 'react';

//* This component creates the input squares:

interface Props {
    index: number;
    setGuesses: (guesses: string[]) => void;
    guesses: string[];
    usableWords: string[];
    solution: string;
}

const WordleInput: React.FC<Props> = ({
    index, 
    setGuesses, 
    guesses,
    usableWords,
    solution}: Props): JSX.Element => {
    //* using state to "store" letters in an array of strings. 
    //* Each string in the array of 5 represent a letter guess   
    const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);
    
    //* Focus: 
    const autoTab = (InputIndex: number, guessIndex: number): void => {
        document.getElementById(`${InputIndex}${guessIndex}`)?.focus();
    }

    //* Handle KeyUp event:
    const handleKeyUp = (e: React.KeyboardEvent, i: number): void => {
        let isCurrentGuessFull: boolean = currentGuess.filter((letter: string): string => letter && letter).length === 5 ? true : false;  //* check if there is a letter and return it. 
        if (e.key === "Backspace") {
            let inputToGoToIndex: number = i-1  >= 0 ? i - 1 : i;
            autoTab(inputToGoToIndex, index); //* no need to move on. 
        } else if (i === 4 && isCurrentGuessFull) {
            console.log('Done');
            handleSubmit()
            autoTab(0, index+1) //* move to the next row. 
        } else {
            let inputToGoToIndex: number = i + 1 
            autoTab(inputToGoToIndex, index); 
        }
    }

    //* Handle submit event:
    const handleSubmit = (): void => {
        let word: string = currentGuess.join("") //* join the letters to make a word. 
        if (usableWords.includes(word) && !guesses.includes(word)) {
            currentGuess.map((letter: string, i: number): void => {
                let input: HTMLElement | null = document.getElementById(`${i}${index}`)
                let letterElement: HTMLElement | null = document.getElementById(letter)
                if (letter == solution[i]) {  //* if letter is in the right position.  
                    if(input) input.style.background = 'green'
                    if (letterElement) letterElement.style.background = 'green'    
                } else if (solution.includes(letter)) {
                    if(input) input.style.background = 'yellow'
                    if (letterElement) letterElement.style.background = 'yellow'
                } else {
                    if (input) input.style.background = 'gray'
                    if (letterElement) letterElement.style.background = 'gray'
                }    
                let newGuesses: string[] = [... guesses];
                newGuesses[index] = word;
                setGuesses(newGuesses);
            })
        } else {
                alert('Not a word')}

        }
    
    return (
        <div>
            {/* //* Loop over the array of strings: */}
            {currentGuess.map(
                (letter: string, i: number): JSX.Element => (
                <input 
                    key={i} 
                    type='text' 
                    id={`${i}${index}`} //* combine i and index in order to cross column and row. 
                    value={currentGuess[i]} 
                    onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => {
                        //* update the state:// 
                        let newCurrentGuess: string[] = currentGuess; 
                        if (!value.match(/[a-z]/gi)) {
                            newCurrentGuess[i] = "";
                            // alert(newCurrentGuess);
                            setCurrentGuess(newCurrentGuess);
                        } else {
                            newCurrentGuess[i] = value;
                            // alert(newCurrentGuess);
                            setCurrentGuess(newCurrentGuess);
                        }  
                    }}
                    onKeyUp={(e: React.KeyboardEvent)=> handleKeyUp(e, i)}
                    maxLength={1} 
                    minLength={1}
                    pattern={'/^[a-zA-Z]*$/'}
                    required 
                    />
            ))}

        </div>
    )
}

export default WordleInput; 