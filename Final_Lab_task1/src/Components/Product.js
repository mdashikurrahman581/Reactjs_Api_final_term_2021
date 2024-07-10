import React from 'react'
const Product=(props)=>{
    return(
        <div>
            Name:{props.name}<br/>
            Model:{props.model}<br/>
            Price: {props.price}
        </div>
    )
}
export default Product;