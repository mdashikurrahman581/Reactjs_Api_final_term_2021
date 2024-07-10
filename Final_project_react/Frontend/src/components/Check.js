import React from 'react';
import axios from "axios";
import {useParams}  from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Check.css"

const Check = () => {

    const {id} = useParams();
    const deletee = () => {

        var obj={id:id}


        axios.post("http://localhost:8000/api/delete",obj)
        .then(resp=>{
            alert("Product Deleted Successfully");

            console.log(resp.data);

            
        })
        .catch(err=>{
            console.log(err.data);
        })


    }
   // <h1>Are You Sure ?</h1>
   // <button className="btn btn-outline-dark ms-2" onClick={deletee}>Delete</button>
    
    return (
        <div>
         

           <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure...?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/products">
            <Button className="delete_btn" variant="info">
               Cancel
            </Button>

            <Button onClick={deletee} variant="danger">
              Delete
            </Button>
            
          </Link>
        </Modal.Footer>
    </Modal.Dialog>
        
        </div>
    )
}

export default Check
