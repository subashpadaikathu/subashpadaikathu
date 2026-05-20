import { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        city:"",
        phone:"",
        password:"",

    })


function handleChanges(e){
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })

}
return (
    <>
    
<input type="text" placeholder="enter name" name="name" onChange={handleChanges}/>
<input type="text" placeholder="enter email" name="email" onChange={handleChanges}/>
<input type="text" placeholder="enter city" name="city" onChange={handleChanges}/>
<input type="text" placeholder="enter phone" name="phone" onChange={handleChanges}/>
<input type="text" placeholder="enter password" name="password" onChange={handleChanges}/>
 
 <h1>FORM</h1>
 <h3>Name : {formData.name}</h3>
 <h3>Email : {formData.email}</h3>
 <h3>City : {formData.city}</h3>
 <h3>Phone : {formData.phone}</h3>
 <h3>Password : {formData.password}</h3>
</>
)
}

export default Form;