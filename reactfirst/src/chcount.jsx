import { useState } from "react";

function Count() {
    const [increment, setIncrement] = useState(0);
    return (
        <>
        <h1>count :{increment}</h1>
        <button onClick={()=>(setIncrement(increment+1))}>Increase</button>
        </>
    )
}

export default Count;