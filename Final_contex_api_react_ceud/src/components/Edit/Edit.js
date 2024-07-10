import React from 'react';
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
    const [users, setUser] = useContext(UserContext);
    const { id } = useParams();
    const user = users.filter((user) => user.id == id);

   

    
    const [pname, setPname] = useState(user[0].pname);
    const [image, setImage] = useState(user[0].image);
    const [unitprice, setUnitprice] = useState(user[0].unitprice);
    const [quantity, setQuantity] = useState(user[0].quantity);
    const [description, setDescription] = useState(user[0].description);

 
    // const editId = (e) => {
    //     setId(e.target.value);
    //     const edited_id = id;
    //     user[0].id = edited_id;
    //   };

      const editPname = (e) => {
        setPname(e.target.value);
        const edited_pname = pname;
        user[0].pname = edited_pname;
      };
    
      const editImage = (e) => {
        setImage(e.target.value);
        const edited_image = image;
        user[0].image = edited_image;
      };
      

      const editUnitprice = (e) => {
        setUnitprice(e.target.value);
        const edited_unitprice = unitprice;
        user[0].unitprice = edited_unitprice;
      };

      const editQuantity = (e) => {
        setQuantity(e.target.value);
        const edited_quantity = quantity;
        user[0].quantity = edited_quantity;
      };

      const editDescription = (e) => {
        setDescription(e.target.value);
        const edited_description = description;
        user[0].description = edited_description;
      };


      const editUser = (e) => {
        e.preventDefault();
        setUser([...users]);
      };


    return (
        <div className="edit">
           <Form  onSubmit={editUser}>

           <Form.Group>
          <Form.Label>
            <h1>Product Id: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>

           <Form.Group>
          <Form.Label>Name</Form.Label>
           <Form.Control type="text" name="pname" value={pname} onChange={editPname} placeholder={user[0].pname}/>
        </Form.Group>    

        <Form.Group>
          <Form.Label>Image</Form.Label>
           <Form.Control type="text" name="image" value={image} onChange={editImage} placeholder={user[0].image}/>
        </Form.Group>  

        <Form.Group>
          <Form.Label>Unit Price</Form.Label>
           <Form.Control type="text" name="unitprice" value={unitprice} onChange={editUnitprice} placeholder={user[0].unitprice}/>
        </Form.Group> 


        <Form.Group>
          <Form.Label>Quantity</Form.Label>
           <Form.Control type="text" name="quantity" value={quantity} onChange={editQuantity} placeholder={user[0].quantity}/>
        </Form.Group> 


        <Form.Group>
          <Form.Label>Description</Form.Label>
           <Form.Control type="text" name="description" value={description} onChange={editDescription} placeholder={user[0].description}/>
        </Form.Group> 
        <br/>  



        <Link to="/">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit Product
          </Button>
         
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>


           </Form>


        </div>
    )
}

export default Edit;
