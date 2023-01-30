import React from "react";

const WordleKeyboard: React.FC = () :JSX.Element => {
        
    //* Array of letters:
    const alphabet: string[] = 'qwertyuiopasdfghjklzxcvbnm'.split('');

    return (
        <div className="keyboardBase">
            {alphabet.map((letter: string, i: number): JSX.Element => (
                <button className="key"
                        id={letter} 
                        key={i} 
                        value={alphabet[i]}
                        >
                    {letter}
                </button>
            ))}
            <button className="key"
                    id='Enter' 
                    style={{width: '120px'}}
                    >
                    enter
            </button>
            <button className="key" 
                    id='Backspace' 
                    style={{width: '140px', marginLeft: "60px"}}
                    >
                    Backspace
            </button>

        </div>
        
        )
    }

export default WordleKeyboard;