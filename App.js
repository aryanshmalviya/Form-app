import React from "react";
import { useState } from "react";
import PasswordCheckList from "react-password-checklist"
import Home from "./components/home";
function App(){
  const[name, setName] = useState('');
  const[password, setPassword] = useState('');
  const[mail , setMail] = useState('');
  const[passwordAgain , setPasswordAgain] = useState('');
  const[isValid,setIsValid]=useState(false)
  
  const handlemailChange = (e)=>{
    setMail(e.target.value);
  }
  
  const handlenameChange = (e) =>{
    setName(e.target.value);
  }

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
  }

  const handleConfPasswordChange =(e)=>{
    setPasswordAgain(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isValid){
      return alert('A form was submitted with Name :"' + name +
      '" and Email :"' + mail + '"');  
    }
    return alert("Validation Failed")
    // console.log(password!==passwordAgain,"password!==passwordAgain",password,passwordAgain)
    // if(password!==passwordAgain)
    // {
    //   alert("Password Not Match !");
    // }    
    
    // else{
       
    //  // window.location.reload(false);   
    // }

  }
      
  return(
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <h2>Sign-up Form</h2>
          <label>
            Name:
          </label><br/>
          <input type="text" value={name} required onChange={(e)=>
            {handlenameChange(e)}}/><br/>
          <label>
            email:  
          </label><br/>
          <input type="email" value={mail} required onChange={(e)=>
            {handlemailChange(e)}} /><br/>  
          <label>
            Password:
          </label><br/>
          <input type="password" value={password} required onChange={(e)=>
            {handlePasswordChange(e)}}/><br/>                   
          <label>
            Confirm Password:  
          </label><br/> 
          <input type="password" value={passwordAgain} required onChange={(e) =>
          {handleConfPasswordChange(e)} }></input><br/>
          <input type="submit" value="Sign-In"></input>
<Home name={name}/>
          <PasswordCheckList
            rules={["minLength","specialChar","number","capital","match"]}
            minLength={8}
            value = {password}
            valueAgain={passwordAgain}
            onChange={(isValided) =>setIsValid(isValided)}     
                   
          />
        </form>
      </header>
    </div>
  );
}

// function ValidatePassword(){

// }

export default App;
