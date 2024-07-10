import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router";


const Login = () => {
    const history = useHistory();
   

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    var Psubmit=()=> {
    
    
        var obj ={username:username,password:password};
    
            
    
                axios.post("http://localhost:8000/api/login",obj)
                .then(resp=>{
                    alert("Login Succesfull");
    
                    console.log(resp.data);
                    history.push("/");
                    
                })
                .catch(err=>{
                    alert("Enter valid username & password!")
                    console.log(err.data);
                })
            
    
      } 
      

    return (
        <div>
            <form >
                <br /> <h1>Login</h1><br />
                <h3> </h3>

                <span>User Name</span><br />
                <input type="text" onChange={(e) => setUsername(e.target.value)} /><br />
                <span></span>

                <span>Password</span><br />
                <input type="text" onChange={(e) => setPassword(e.target.value)} /><br />

            </form>
            <br />
            <button  onClick={Psubmit}>Login</button>
        </div>
    )
}

export default Login;
