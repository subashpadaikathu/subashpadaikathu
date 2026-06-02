import { useContext } from "react";
import { quizContext } from "./App";

function Home() {
const {setUser} = useContext(quizContext);
 return (
    <input type="text" onChange={(e) => setUser(e.target.value)} />
    <button onClick={handleC
        
    }></button>
 )
}

export default Home;