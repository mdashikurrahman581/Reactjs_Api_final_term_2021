import React from 'react'
import "./Delete.css"
import {useContext} from 'react'
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Delete = () => {
   // const[users, setUsers]= useContext(UserContext);
   // console.log(users);
  // const{id}=useParams();
 //   console.log(id);
 const [users, setUser] = useContext(UserContext); 
 const { id } = useParams();

 const deleteUser = (id) => {
   const user = users.filter((user) => user.id != id);
   setUser([...user]);
 };


 console.log(users[id]);
 const user= users.filter((user)=> user.id !=id);
 console.log(user);

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

            <Button onClick={() => deleteUser(id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
    </Modal.Dialog>
        </div>
    )
}

export default Delete
