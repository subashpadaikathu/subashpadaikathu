import { createContext, useState } from "react";


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
        <Route path='/quiz' element={<Questions />} />
        <Route path='/result' element={<Result />} />
    </Routes>
  </quizContext.Provider>
  </BrowserRouter>
  
  </>
 )

}


export default App;