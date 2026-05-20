import { useState } from "react";

function Input(){
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("");
    
    

    return(
        <>
        <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={()=>setName(inputValue)}>button</button>
        <h1>hellow {name}</h1>
        </>
    )

}

export default Input;