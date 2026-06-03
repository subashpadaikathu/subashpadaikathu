import { useContext } from "react";
import { quizContext } from "./App";
import { useNavigate } from "react-router-dom";

function Home() {
const Navigate = useNavigate();
const {setUser} = useContext(quizContext);

function Submit() {
   Navigate("/quiz")
}
 return (
 <>
    <input type="text" onChange={(e) => setUser(e.target.value)} />
    <button onClick={Submit}>submit</button>
 </>
 )
}

export default Home;