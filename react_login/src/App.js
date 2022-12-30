
import './App.css';
import {useEffect, useState} from "react";


function App() {
  return (
    <Login />
  );
}

function Login(){
  const AppTitle="Login Portal"

  const [userName,setUserName]=useState('');
  const [passWord,setPassWord]=useState('');
  
  const handleUserChange=(event)=>{
    const userValue=event.target.value 
    setUserName(userValue);
  }

  const handlePassChange=(event)=>{
    const passValue=event.target.value
    setPassWord(passValue);
  }

  const handleSubmit=()=>{
    if(userName && passWord){
      if(userName==="admin" && passWord==="admin"){
        alert("Login successful!");
      }
      else{
        alert("Login failed!");
      }
    }
    setUserName('');
    setPassWord('');
  }

  
  useEffect(()=>{
    const message=()=>{
      alert("Enter credetials to login!")
      }
    return message;
    
  },[])

  return(
    <div className='login-card'>
      <LoginHeader title={AppTitle}/>
      <LoginBody infoUserChange={handleUserChange} infoPassChange={handlePassChange}/>
      <LoginFooter submitInfo={handleSubmit}/>
    </div>
  )
}


function LoginHeader({title}){
  return( 
      <div className='title'>
        <h1>
          {title}
        </h1>
      </div> 
  )
}

function LoginBody({infoUserChange,infoPassChange}){
  return(
    <div className='body'>
      <div className='user'>
        Username: <br />
        <input placeholder='Enter Username' name='username' type="text" onChange={infoUserChange} ></input>
      </div>
      <br />
      <div className='pass'>
        Password: <br />
        <input placeholder='Enter Password' name='password' type="password" onChange={infoPassChange} ></input>
      </div>
      <br />
      
    </div>
    
  )
}

function LoginFooter({submitInfo}){
  return(
    <div className='footer'>
      <button type='submit'onClick={submitInfo}>Login</button>
    </div>
  )
}



export default App;
