import React, { useState } from 'react';
import axios from "axios";
import { Link,useParams } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

const Newnew = () => {


    const { id } = useParams();
    const { name } = useParams();
    const { p_id } = useParams();
    const { unit_price } = useParams();
    const { quantity } = useParams();
    const { p_image } = useParams();
    const { description } = useParams();

    const [ename, setName] = useState(name);
    const [ep_id, setP_id] = useState(p_id);
    const [eunit_price, setUnit_price] = useState(unit_price);
    const [equantity, setQuantity] = useState(quantity);
    const [ep_image, setP_image] = useState(p_image);
    const [edescription, setDescription] = useState(description);
  

    var Submit = () => {


        var obj = {
            id: id, name: ename, p_id: ep_id, p_image: ep_image,  unit_price: eunit_price,
            quantity: equantity, description: edescription
        };



        axios.post("http://localhost:8000/api/update", obj)
            .then(resp => {
                alert("Update Succesfull");

                console.log(resp.data);


            })
            .catch(err => {
                console.log(err.data);
            })


    }


    return (
        <div className="add">

            <Form >
               <h1>Edit Product</h1>            
                <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text"  placeholder={name} onChange={(e) => setName(e.target.value)} /><br />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Product Id</Form.Label>
                    <Form.Control type="text"    placeholder={p_id} onChange={(e) => setP_id(e.target.value)} /><br />
                </Form.Group>

                  <Form.Group>
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="text"   placeholder={p_image} onChange={(e) => setP_image(e.target.value)} /><br />
                </Form.Group>  

                <Form.Group>
                    <Form.Label>Product Unit Price</Form.Label>
                    <Form.Control type="text"   placeholder={unit_price} onChange={(e) => setUnit_price(e.target.value)} /><br />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="text"  placeholder={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text"  placeholder={description} onChange={(e) => setDescription(e.target.value)} /><br />
                </Form.Group>
            </Form>
            
            <Button className="btn btn-outline-dark ms-2"  variant="success" onClick={Submit}>Update Product</Button>
            <Link className="btn btn-outline-dark ms-2"   to="/products">Back</Link>
        </div>
    )
}

export default Newnew;


