import React from 'react'
import Product from './Product'

const Hello=()=>{
    return(
        <div>
            <h1>This is my app</h1>
            
            <Product name="Huawei" model="Mate 40" price="80k"/><br/>
            <Product name="Oneplus" model="Oneplus 9r" price="50k"/><br/>
            <Product name="Samsung" model="Note Altra" price="120k"/><br/>
        </div>
    )
}

export default Hello;