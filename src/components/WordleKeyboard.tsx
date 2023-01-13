import React, {MouseEvent, useState} from "react";
// import { InputContext } from '../context/inputField';


// export default function WordleKeyboard({onClick: onClickProp}: {onClick: (letter: string) => void;}) {
//     const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         const letter = e.currentTarget.textContent;
//         console.log(letter);
//         onClickProp(letter!);
       
//     }
//     return (
//         <div style={{marginTop: '10px'}}>
//             {keyboardKeys.map((keyboardRow, rowIndex) => {
//                 return (
//                     <div key={rowIndex}>
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
//                                     );
//                             }
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
//                                     );
//                             }
//                             if (key !== '') {
//                             return (
//                             <button 
//                             id={key} 
//                             key={index}
//                             onClick={onClick}
//                             >
//                                 {key}
//                             </button>
//                             );
//                     }})}
//                     </div>
//                     );
//                     })}
//         </div>
//     )
// }

// const keyboardKeys = [
//        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
//         ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ''],
//         ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],   
// ];
// type keyBoardProps={
//     onClickProp: Function,
// };
interface Props {
    setGuesses: (guesses: string[]) => void;
    onClick: (e: React.KeyboardEvent | React.MouseEvent, i: number) => void;
    onSubmit: () => void;
    guesses: string[];
    usableWords: string[];
    solution: string;
}

const WordleKeyboard: React.FC<Props> = ({ 
    setGuesses, 
    guesses,
    onClick,
    onSubmit,
    usableWords,
    solution}: Props) :JSX.Element => {
    //* Array of letters:
    const alphabet: string[] = 'qwertyuiopasdfghjklzxcvbnm'.split('');

    const [currentGuess, setCurrentGuess] = useState<string[]>([...Array(5)]);


    const handleOnClick = (event: MouseEvent<HTMLButtonElement>, i: number): void | string => {
        event.preventDefault();
        const letter: string = event.currentTarget.textContent!;
        console.log(letter);
        setCurrentGuess(letter[i])!;
        if (letter === 'Backspace') {
            
        }
    }


    return (
        <div className="keyboardBase">
            {alphabet.map((letter: string, i: number): JSX.Element => (
                <button className="key"
                        id={letter} 
                        key={i} 
                        onClick={(event:React.MouseEvent<HTMLButtonElement>)=> {
                            handleOnClick(event,i);
                            setCurrentGuess(event.currentTarget.textContent);
                            onSubmit();
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