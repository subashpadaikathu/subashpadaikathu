import { useState } from "react"



function Toggle() {

  const [on, cOn] = useState(false);

  

  return (

    <div>
       {on ? <img src="https://www.w3schools.com/js/pic_bulbon.gif" alt="" /> : <img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="" /> }
  <button onClick={() =>cOn(!on)}>
    {on ? "on" : "off"}</button>

  </div>
  );

}

export default Toggle;
