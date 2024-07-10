import React from 'react';
import {Link} from 'react-router-dom';

const Top=()=>{
    return(
        <div>
         <Link to="/">Home</Link> &nbsp;&nbsp;
         <Link to="/profile">Profile</Link> &nbsp;&nbsp;
         <Link to="/contact">Contact</Link>&nbsp;&nbsp;
         <Link to="/product/2">Product</Link>&nbsp;&nbsp;
         <Link to="/product/2/m">DProduct</Link>&nbsp;&nbsp;
        </div>
    )
}
export default Top;