import React from 'react';
import { useHistory } from "react-router";
import { Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Check.css"



const Out = () => {
    const history = useHistory();

    var Submit = () => {


        history.push("/login");

    }
    //<button  className="btn btn-outline-dark" onClick={Submit}>Logout</button> 

    return (
        <div>

            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure...?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    
                    <Link to="/">
                        <Button className="delete_btn" variant="info">
                            Cancel
                        </Button>
                    </Link>

                    <Link to="/login">
                        <Button onClick={Submit} variant="danger">
                            Logout
                        </Button>
                    </Link>

                </Modal.Footer>
            </Modal.Dialog>



        </div>


    )
}

export default Out;
