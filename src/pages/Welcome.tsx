import LogIn from "./LogIn";

export function Welcome () {
    const text = "Welcome to Wordle game"
    return (
        <>
            <div className="typewriter">
                <h1>{text}</h1>
            </div>
            <div className="welcome-buttons">
                <button className="play2"><a className='play' href={'game'} >Start Play</a></button>
                <LogIn/>
            </div>
       </>
    )
}   