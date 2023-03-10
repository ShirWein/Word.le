import React, {useState, useEffect} from 'react';

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
    //using state to "store" letters in an array of strings. 
    //Each string in the array of 5 represent a letter guess   
    const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);
    
    //Focus: 
    const autoTab = (InputIndex: number, guessIndex: number): void => {
        document.getElementById(`${InputIndex}${guessIndex}`)?.focus();
    }
    
    useEffect(() => {
        document.getElementById('00')?.focus();
    }, []);

    //* Handle KeyUp event:
    const handleKeyUp = (e: React.KeyboardEvent | React.MouseEvent, i: number): void => {
        //Check if row is full:
        let isCurrentGuessFull: boolean = currentGuess.filter((letter: string): string => letter && letter).length === 5 ? true : false; 
        const pattern = /^[A-Za-z]+$/;
        const isValid = pattern.test((e.target as HTMLInputElement).value);
        if (!isValid) {
            e.preventDefault();
            (e.target as HTMLInputElement).value = "";
        }
        if ((e as React.KeyboardEvent).key === "Backspace"  || e.currentTarget.textContent === "Backspace") {
            let inputToGoToIndex: number = i-1  >= 0 ? i - 1 : i;
            autoTab(inputToGoToIndex, index); //* no need to move on. 
        } else if (i === 4 && isCurrentGuessFull) {
                console.log('Done');
                handleSubmit()
                autoTab(0, index+1) //move to the next row. 
            } 
        else if (isValid) {
                let inputToGoToIndex: number = i + 1 
                autoTab(inputToGoToIndex, index); 
            } 
        }
    

    //* check letter position: 
    const handleSubmit = (): void => {
        let word: string = currentGuess.join("");
         fetch('http://localhost:3333/game/check-guess', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({"key" : word}) 
        }).then(results => results.json()).then(
            data =>  {
                console.log('data',data);
                data.map((letter: string, i: number): void => {
                    console.log('letter', letter);
                let input: HTMLElement | null = document.getElementById(`${i}${index}`)
                let letterElement: HTMLElement | null = document.getElementById(`${i}`);
                console.log('letterElement', letterElement);
                if (letter) {  //* if letter is in the right position.  
                    if(input) input.style.background = 'green'
                    if (letterElement) letterElement.style.background = 'green'    
                } else if (letter === null) {
                    if(input) input.style.background = 'gray'
                    //@ts-ignore
                    if (letterElement === null) letterElement.style.background = 'gray'
                } else {
                    if (input) input.style.background = 'yellow'
                    if (letterElement) letterElement.style.background = 'yellow'
                }    
                let newGuesses: string[] = [... guesses];
                newGuesses[index] = word;
                setGuesses(newGuesses);
            })}
        );
        };
        // if (usableWords.includes(word) && !guesses.includes(word)) {
        //     currentGuess.map((letter: string, i: number): void => {
        //         let input: HTMLElement | null = document.getElementById(`${i}${index}`)
        //         let letterElement: HTMLElement | null = document.getElementById(letter)
        //         if (letter == solution[i]) {  //* if letter is in the right position.  
        //             if(input) input.style.background = 'green'
        //             if (letterElement) letterElement.style.background = 'green'    
        //         } else if (solution.includes(letter)) {
        //             if(input) input.style.background = 'yellow'
        //             if (letterElement) letterElement.style.background = 'yellow'
        //         } else {
        //             if (input) input.style.background = 'gray'
        //             if (letterElement) letterElement.style.background = 'gray'
        //         }    
        //         let newGuesses: string[] = [... guesses];
        //         newGuesses[index] = word;
        //         setGuesses(newGuesses);
        //     })
        // } 

        // }
    
    return (
        <div>
            {/* Loop over the array of strings: */}
            {currentGuess.map(
                (letter: string, i: number): JSX.Element => (
                <input style={{boxShadow: '5px 5px 10px rgba(0,0,0,0.5)', margin: '1px'}} 
                    key={i} 
                    type='text' 
                    id={`${i}${index}`} //* combine i and index in order to cross column and row. 
                    value={currentGuess[i]} 
                    onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => {
                        // update the state:
                        let newCurrentGuess: string[] = currentGuess; 
                        if (!value.match(/^[A-Za-z]+$/)) {
                            newCurrentGuess[i] = "";
                            setCurrentGuess(newCurrentGuess);
                        } else {
                            newCurrentGuess[i] = value;
                            setCurrentGuess(newCurrentGuess);
                        }  
                    }}
                    onKeyUp={(e: React.KeyboardEvent | React.MouseEvent)=> handleKeyUp(e, i)}
                    maxLength={1} 
                    pattern={'/^[a-zA-Z]*$/'}
                    required 
                    />
            ))}
        </div>
            )
}

export default WordleInput; 