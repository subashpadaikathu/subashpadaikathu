import { createContext, useState } from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Dashboard from "./dashboard";
import Loginpage from "./loginpage";
import Profilepage from "./Profilepage";

export const userContext = createContext();
function App(){
const [name, setName] = useState("")
return(
    <>
    <userContext.Provider value = {{name, setName}}>
        <BrowserRouter>
        <Link to="/">profilepage</Link>
        <Link to="/dashboard">Dashboard</Link>
        
        <Link to="/loginpage">Loginpage</Link>
        <Routes>
            <Route path="/" element={<Profilepage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/loginpage" element={<Loginpage/>}/>
                
        </Routes>
        </BrowserRouter>
    </userContext.Provider>
    </>
)
}

export default App;