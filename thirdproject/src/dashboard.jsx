import { useContext } from "react";
import { userContext } from "./App";
import { useNavigate } from "react-router-dom";
import Profilepage from "./Profilepage";

function Dashboard(){
    const {name} = useContext(userContext);
     const navigate = useNavigate();

     function logout(){
        navigate("/")
        
     }
     
     return(
        
     <>
     <h1>Dash Board</h1>

     <h2>welcome {name}</h2>


     <button onClick={logout}>logout</button>

     </>
     );
     

     
}

export default Dashboard;
