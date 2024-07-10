import React from 'react'
import "./Home.css"
import {useContext} from 'react'
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import {Link} from "react-router-dom";

const Home= () => {
  const[users, setUsers]= useContext(UserContext);
 // console.log(users);
    return (
        <div>
      <Link to="/add">
            <Button className="addproduct_btn" variant="primary">
               Add Product
           </Button>
      </Link>


             <Table striped bordered hover>
  <thead>
    <tr>
      <th>Product Id</th>
      <th>Product Name</th>
      <th>Image</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(user=>
   
    <tr>
      <td>{user.id}</td>
      <td>{user.pname}</td>
      <td>{user.image}</td>
      <td>{user.unitprice}</td>
      <td>{user.quantity}</td>
      <td>{user.description}</td>
      <td>
      
      <Link to={"/read/"+user.id}>
                  <Button className="action_btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/edit/"+user.id}>
                <Button className="action_btn" variant="info">
                  Edit
                </Button>
                </Link>
                <Link to={"/delete/"+user.id}>
                <Button className="action_btn" variant="danger">
                  Delete
                </Button>
                </Link>
               
      </td>
    </tr>)
    }
  </tbody>
</Table>
        </div>
    )
}

export default Home;
