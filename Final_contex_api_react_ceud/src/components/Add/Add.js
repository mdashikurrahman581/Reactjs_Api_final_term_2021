
import React, { useState, useContext } from "react";
import "./Add.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";




const Add = () => {

  const [id, setId] = useState("");
  const [pname, setPname] = useState("");
  const [image, setImage] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
 

  const [users, setUser] = useContext(UserContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updatePname = (e) => {
    setPname(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updateUnitprice = (e) => {
    setUnitprice(e.target.value);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    setUser([...users, {id:id, pname:pname, image:image, unitprice:unitprice, quantity:quantity, description:description}])
}


    return (
        <div className="add">
 <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>Id</Form.Label>
           <Form.Control type="text" name="Id" value={id} onChange={updateId} placeholder="Enter the product id"/>
        </Form.Group>            

        <Form.Group>
          <Form.Label>Name</Form.Label>
           <Form.Control type="text" name="pname" value={pname} onChange={updatePname} placeholder="Enter the product name"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Image</Form.Label>
           <Form.Control type="text" name="image" value={image} onChange={updateImage} placeholder="Image"/>
        </Form.Group>  

        <Form.Group>
          <Form.Label>Unit Price</Form.Label>
           <Form.Control type="text" name="unitprice" value={unitprice} onChange={updateUnitprice} placeholder="Enter the per unit price"/>
        </Form.Group> 


        <Form.Group>
          <Form.Label>Quantity</Form.Label>
           <Form.Control type="text" name="quantity" value={quantity} onChange={updateQuantity} placeholder="Enter the quantity"/>
        </Form.Group> 


        <Form.Group>
          <Form.Label>Description</Form.Label>
           <Form.Control type="text" name="description" value={description} onChange={updateDescription} placeholder="Enter the product description"/>
        </Form.Group> 
        <br/>  

        <Button className="action_btn" variant="primary" type="submit">
          Add Product
        </Button>

        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
    </Form>
        </div>
        
    )
}

export default Add;
