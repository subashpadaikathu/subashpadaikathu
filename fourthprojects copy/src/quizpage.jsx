import { useNavigate } from "react-router-dom";
import data from "./assets/questions.json";
import { useContext, useState } from "react";
import { quizContext } from "./App";


function Quizpage() {
    const Navigate = useNavigate();
  
const {score, setScore} = useContext(quizContext);
         
          function handClick(selectedOption) {
  if (data[count].answer === selectedOption) {
    setScore(prev => prev + 1);
  }
}
             const [count, setCount] = useState(0);
           
            function next() {
                
               setCount(count+1)

               
            
                
            }

            function result(){
               Navigate('/result')
            }


        

    return (
        <>

            <h1>{data[count].prompt}</h1>
            <button onClick={() => handClick("optionA")}>{data[count].optionA}</button>
            <button onClick={() => handClick("optionB")}>{data[count].optionB}</button>
            <button onClick={() => handClick("optionC")}>{data[count].optionC}</button>
            <button onClick={() => handClick("optionD")}>{data[count].optionD}</button>

       

            <button onClick={next}>{count === data.length - 1 ? "click result button" : "next question"}</button>
            <button onClick={result}>result</button>
            
            

        </>
    )

}

export default Quizpage;




//    const option = [A,B,C,D];
            //    data[count].option[options]

            




      //  {     <h1>{data.map((item, index) => (
        //         <h1 key={index}>{item.option[options]}</h1>
        //     ))} </h1> }