import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

const emailinput=useRef(null);
  const passwordinput=useRef(null);
  
  const [email,Setemail]=useState("");
  const[password,Setpassword]=useState("");
  const[emailval,Setemailval]=useState("");
  const[passval,Setpassval]=useState("");
const clickfunction = () => {
  Setemailval("");
  Setpassval("");
  if(email.length===0){
    emailinput.current.focus();
    
  }else if(password.length===0){
  passwordinput.current.focus();
  }else{
    Setemailval(email);
    Setpassval(password);
    Setemail("");
    Setpassword("");
  }
  
}
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email} ref={emailinput} onChange={(e)=>Setemail(e.target.value)}/><br required/>
      Password
      <input id="inputPassword" type="text" value={password} ref={passwordinput} onChange={(e)=>Setpassword(e.target.value)}/><br required/>
      <button id="submitButton" onClick={()=>clickfunction()}>Submit</button><br/>
      <p id="emailText">Your Email : {emailval}</p>
      <p id ="passwordText">Your Password : {passval}</p>
      
    </div>
  )
}


export default App;
