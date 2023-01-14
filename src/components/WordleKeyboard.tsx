import React, {MouseEvent, useState} from "react";

// import { InputContext } from '../context/inputField';


// export default function WordleKeyboard() {
//     const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         // const letter = e.currentTarget.textContent;
//         // console.log(letter);
//         // onClickProp(letter!)  
       
//     }

//     // const addGuessLetter = (letter: string) {

//     // }


//     return (
//         <div style={{marginTop: '10px'}}>
//             {keyboardKeys.map((keyboardRow, rowIndex) => {
//                 return (<div key={rowIndex}>
//                         {keyboardRow.map((key, index) => {
//                             if (key === 'Enter') {
//                                 return (
//                                     <button 
//                                         id={key} 
//                                         style={{width: '100px'}} 
//                                         key={index}
//                                         onClick={onClick}>
//                                         {key}
//                                     </button>
//                                     );}
//                             if (key === 'Backspace') {
//                                 return (
//                                     <button
//                                         id={key} 
//                                         style={{width: '150px'}} 
//                                         key={index}
//                                         onClick={onClick}
//                                         >
//                                         {key}
//                                     </button>
//                                     );}
//                             if (key !== '') {
//                                 return (
//                                     <button 
//                                         id={key} 
//                                         key={index}
//                                         onClick={onClick}
//                                         >
//                                         {key}
//                                     </button>
//                                     );}
//                                 })}
//                     </div>
//                 );
//                 })
//             }
//         </div>
//     )
// }

// const keyboardKeys = [
//        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
//         ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ''],
//         ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],   
// ];

interface Props {
    setGuesses: (guesses: string[]) => void;
    onClick: (e: React.KeyboardEvent | React.MouseEvent, i: number) => void;
    onSubmit: () => void;
    autoTab: (InputIndex: number, guessIndex: number) => void;
    guesses: string[];
    usableWords: string[];
    solution: string;
    index: number;
}

const WordleKeyboard: React.FC<Props> = ({ 
    setGuesses, 
    index,
    guesses,
    onClick,
    onSubmit,
    autoTab,
    usableWords,
    solution}: Props) :JSX.Element => {
        
    //* Array of letters:
    const alphabet: string[] = 'qwertyuiopasdfghjklzxcvbnm'.split('');

    const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);


    const handleOnClick = (e: MouseEvent<HTMLButtonElement>, i: number): void | string => {
        // event.preventDefault();
        // const letter: string = event.currentTarget.textContent!;
        // console.log(letter);
        let isCurrentGuessFull: boolean = currentGuess.filter((letter: string): string => letter && letter).length === 5 ? true : false; 
       
        //* Valid input:
        const pattern = /^[A-Za-z]+$/;
        console.log((e.target as HTMLInputElement).value);
        const isValid = pattern.test((e.target as HTMLInputElement).value);
        if (!isValid) {
            e.preventDefault();
            (e.target as HTMLInputElement).value = "";
        }
        // const lettersRegex = /^[A-Za-z]+$/;
        if (e.currentTarget.textContent === "Backspace") {
            let inputToGoToIndex: number = i-1  >= 0 ? i - 1 : i;
            autoTab(inputToGoToIndex, index); //* no need to move on. 
        } else if (i === 4 && isCurrentGuessFull) {
                console.log('Done');
                onSubmit()
                autoTab(0, index+1) //* move to the next row. 
            } 
        else if (isValid) {
                let inputToGoToIndex: number = i + 1 
                autoTab(inputToGoToIndex, index); 
            } 
        }
        // setCurrentGuess(letter);
        // if (letter === 'Backspace') {
            
        // }
    


    return (
        <div className="keyboardBase">
            {alphabet.map((letter: string, i: number): JSX.Element => (
                <button className="key"
                        id={letter} 
                        key={i} 
                        value={alphabet[i]}
                        onClick={(event:React.MouseEvent<HTMLButtonElement>)=> {

                                //* update the state:
                                let newCurrentGuess: string[] = currentGuess; 
                                
                                let value = event.currentTarget.textContent;
                                newCurrentGuess[i] = value!;
                                setCurrentGuess(newCurrentGuess);
                                 
                                handleOnClick(event,i);
                            // // setCurrentGuess(event.currentTarget.textContent);
                                // onSubmit();
                        }}>
                    {letter}
                </button>
            ))}
            <button className="key"
                    id='Enter' 
                    style={{width: '90px'}}
                    >
                    enter
            </button>
            <button className="key" 
                    id='Backspace' 
                    style={{width: '150px', marginLeft: "35px"}}
                    // onClick={(event:React.MouseEvent<HTMLButtonElement>)=>handleOnClick(event,i)}
                    >
                    Backspace
            </button>

        </div>
    )
}

export default WordleKeyboard; 



// const WordleKeyBoard: React.FC = () : JSX.Element => {
//     const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
//     const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ''];
//     const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];  


//     return(
//         <div className="keyboard">
//             <div className="line1">
//                 {keys1.map((key) => {
//                     return <Key keyVal={key}/>
//                 })}
//             </div>
//             <div className="line2">
//             {keys2.map((key) => {
//                     return <Key keyVal={key}/>
//                 })}
//             </div>
//             <div className="line3">
//             <Key keyVal={"Enter"} bigKey/>
//             {keys3.map((key) => {
//                     return <Key keyVal={key}/>
//                 })}
//             <Key keyVal={"Backspace"} bigKey/>
//             </div>
//         </div>
//     )
// }
// export default WordleKeyBoard; 