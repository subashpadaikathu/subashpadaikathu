import { useContext } from "react";
import { quizContext } from "./App";

function Result(){
const{score, user} = useContext(quizContext);
return (
<h1>{`${user} score : ${score}` }</h1>
)
    
}

export default Result;