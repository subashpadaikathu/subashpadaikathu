
import { useContext } from "react";
import { userContext } from "./App";
function Profilepage(){
  const { name } = useContext(userContext);
    return (
    <div>

      <h1>Profile Page</h1>

      <h2>User Name : {name}</h2>

    </div>
  );
}

export default Profilepage;