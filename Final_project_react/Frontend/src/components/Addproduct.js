import React from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { useForm } from 'react-hook-form';
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Addproduct.css";

export default function App() {

  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
 // const { register, handleSubmit} = useForm();

  var onSubmit = data => {
    var obj = {
      name: data.name, p_id: data.p_id, p_image: data.p_image, unit_price: data.unit_price,
      quantity: data.quantity, description: data.description
    };

    axios.post(" http://localhost:8000/api/products/addproduct", obj)
      .then(resp => {
        alert("Product Added Successfully");

        console.log(resp.data);


      })
      .catch(err => {
        console.log(err.data);
      })


  }

  // const back = e => {
  //  history.push("/");
  //}

  return (

    <div className="add">
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter The Product Name" {...register("name", { required: true, minLength: 3, maxLength: 20 })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Id</Form.Label>
          <Form.Control type="text" placeholder="Enter The Product id" {...register("p_id", { required: true, minLength: 3, maxLength: 15 })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="text" placeholder="Enter The Product image Link" {...register("p_image")} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Unit Price</Form.Label>
          <Form.Control type="text" placeholder="Enter The Product price" {...register("unit_price", { required: true })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control type="text" placeholder="Enter The Product quantity" {...register("quantity", { required: true })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Description</Form.Label>
          <Form.Control type="text" placeholder="Enter The Product descriptions" {...register("description", { required: true, minLength: 4, maxLength: 300 })} />
        </Form.Group>

        <br />
        <input type="submit" className="btn btn-outline-dark ms-2" value="Add Product" />
        <Link className="btn btn-outline-dark ms-2"   to="/products">Back</Link>
      </Form>
    </div>
  );
}