import { useContext } from "react";
import { userContext } from "./App";
import { useNavigate } from "react-router-dom";

function Loginpage(){
     const {setName} = useContext(userContext);
     const navigate = useNavigate();

     function handleClick(){
        navigate("/dashboard")
     }
     
     return(
        
     <>
     <h1>Login page</h1>
     <input type="text" placeholder="entername" onChange={(e) => setName(e.target.value )} />

     <button onClick={handleClick}>login</button>

     </>)
     

     
}

export default Loginpage;
