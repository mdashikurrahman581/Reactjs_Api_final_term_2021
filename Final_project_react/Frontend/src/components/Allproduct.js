import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import "./Allproduct.css";


const Allproduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/list")
            .then(resp => {

                // console.log(resp.data);
                setProducts(resp.data);

            }).catch(err => {

                console.log(err);


            });
    }, []);


    return (
        <div>
            <Table striped bordered hover >
                <thead>
                    <tr  className="th">
                        <th>Name</th>
                        <th>Id</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Description</th>                                         
                        <th>Delete Product</th>
                        <th>Update Product</th>

                    </tr>
                </thead>
                <tbody  className="tbody">


                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.p_id}</td>
                                <td>{product.unit_price}</td>
                                <td>{product.quantity}</td>
                                
                                <td><img src={product.p_image} width="120px" height="120px"/></td>
                                <td>{product.description}</td>
                                                                                                                       
                             <td><Link className="btn btn-outline-dark ms-2"  to={`/check/${product.id}`}>Delete</Link></td>
                             <td><Link className="btn btn-outline-dark ms-2" to={`/new/${product.id}/${product.name}/${product.p_id}/${product.unit_price}/${product.quantity}/${product.description}`}>Edit Product</Link></td>




                            </tr>
                        ))

                    }
                </tbody>




            </Table>
        </div>
    );
};

export default Allproduct;
