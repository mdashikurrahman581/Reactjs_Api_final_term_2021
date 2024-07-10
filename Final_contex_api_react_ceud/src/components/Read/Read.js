import React, { useContext } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../UserContext/UserContext';
import "./Read.css"
import {Link} from "react-router-dom";
import { Button} from 'react-bootstrap';
const Read = () => {
    const [users, setUser] = useContext(UserContext);
    const { id } = useParams();
    const user = users.filter((user) => user.id == id);
   // console.log(user);

    return (
    <div className="read">
      <h3>ID: {user[0].id}</h3>
      <h3>Product Name: {user[0].pname}</h3>
      <h3>Product Image: {user[0].image}</h3>
      <h3>Unit Price: {user[0].unitprice} /= </h3>
      <h3>Product Quantity: {user[0].quantity}</h3>
      <h3>Product Description: {user[0].description}</h3>
      <Link to="/">
        <Button variant="info">
          Back
         </Button>
      </Link>
    </div>
    )
}

export default Read;
