import React, { useState } from 'react';
import axios from "axios";
import {useParams}  from 'react-router-dom';


const  Eedit= ()=> {
  const {id} = useParams();
  const {name} = useParams();
  const {p_id} = useParams();
  const {unit_price} = useParams();
  const {quantity} = useParams();
  const {p_image} = useParams();
  const {description} = useParams();

  const [ename, setName] = useState(name);
  const [ep_id, setP_id] = useState(p_id);
  const [eunit_price, setUnit_price] = useState(unit_price);
  const [equantity, setQuantity] = useState(quantity);
  const [ep_image, setP_image] = useState(p_image);
  const [edescription, setDescription] = useState(description);


  

  var Submit=()=> {
    
    
    var obj ={id:id,name:ename,p_id:ep_id,p_image:ep_image,unit_price:eunit_price,
        quantity:equantity,description:edescription};

        

            axios.post("http://localhost:8000/api/update",obj)
            .then(resp=>{
                alert("Update Succesfull");

                console.log(resp.data);

                
            })
            .catch(err=>{
                console.log(err.data);
            })
        

  } 
  
  
  return (
   <div>
    
    <form >
       <br/> <h1>Edit Product</h1><br/>
       <h3> </h3>
       <span>Product Name</span><br/>
      <input type="text" placeholder={name}  onChange={(e)=>setName(e.target.value)}  /><br/>
      <span></span> 
      
      <span>Product Id</span><br/>
      <input type="text" placeholder={p_id} onChange={(e)=>setP_id(e.target.value)}   /><br/>
      <span>Product Image</span><br/>
      <input type="text" placeholder={p_image} onChange={(e)=>setP_image(e.target.value)}  /><br/>
      <span>Product Unit Price</span><br/>
      <input type="text" placeholder={unit_price} onChange={(e)=> setUnit_price(e.target.value)}   /><br/>
      <span>Product Quantity</span><br/>
      <input type="text" placeholder={quantity}  onChange={(e)=>setQuantity(e.target.value)}  /><br/>

      <span>Description</span><br/>
      <input type="text" placeholder={description}  onChange={(e)=>setDescription(e.target.value)}  /><br/>

    </form>

    <button onClick={Submit}>Submit</button>
   </div> 
  );
}
export default Eedit;





      