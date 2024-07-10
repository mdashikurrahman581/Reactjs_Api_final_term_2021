import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";


const Plogin = () => {
    const history = useHistory();


    const [username, setUsername] = useState("yes");
    const [password, setPassword] = useState();


    var Psubmit = () => {


        var obj = { username: username, password: password };



        axios.post("http://localhost:8000/api/login", obj)
            .then(resp => {
           

              console.log(resp.data);

              var p = resp.data;

              if(p.username === username){

                   

              alert("Login Succesfull");

               history.push("/");
              }else{

                alert("Enter valid username & password!");

              }

                             

            })
            .catch(err => {
                alert("Enter valid username & passwo!")
                console.log(err.data);
            })


    }


    return (
        <div className="add">
            <Form >
                <br /> <h1>Login</h1><br />
                <h3> </h3>

                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label  htmlFor="password" >Password</Form.Label>
                    <Form.Control  type="password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

            </Form>
            <br />
            <button className="btn btn-outline-dark ms-2"  onClick={Psubmit}>Login</button>
        </div>
    )
}

export default Plogin;
