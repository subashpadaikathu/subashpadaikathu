import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./home";
import Quizpage from "./quizpage";
import Result from "./resultpage";


export const quizContext = createContext();
function App(){

  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);

 return (
  <>
  <BrowserRouter>
  <quizContext.Provider value={setScore, setUser, user, score}>
    <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quizpage />} />
        <Route path='/result' element={<Result />} />
    </Routes>
  </quizContext.Provider>
  </BrowserRouter>
  
  </>
 )

}


export default App;