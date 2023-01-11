export function Welcome () {
    const text = "Welcome to Wordle game"
    return (
        <>
            <div className="typewriter">
                <h1>{text}</h1>
            </div>
            <br/>
            <br/>
            <button className="play2"><a className='play' href={'game'} >Start Play</a></button>
       </>
    )
}   