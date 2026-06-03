import { useContext, useEffect, useRef } from "react"
import { quizContext } from "../App"
import { useNavigate } from "react-router-dom";

function Home() {
    const { user, setUser } = useContext(quizContext);
    const userRef = useRef()
    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    function startGame() {
        if (user) {
            navigate("/quiz");
        } else {
            alert("Enter valid input")
        }

    }

    return (
        <div>
            <input ref={userRef} value={user} type="text" placeholder="Enter userName" />
            <button onClick={startGame}>Start quiz</button>
        </div>
    )
}

export default Home