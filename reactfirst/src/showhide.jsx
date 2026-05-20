import { useState } from "react";

function Hideshow(){
    const [show, setShow] = useState(false);
    return (
        <>
        <button onClick={()=>setShow(!show)}>
            {show ? "hide" : "show"}
        </button>
        {show && <p>hellow i am subash from react</p>}
        </>
    )
}
export default Hideshow;