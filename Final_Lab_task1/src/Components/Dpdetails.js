import React from 'react';
import {useParams} from 'react-router-dom';
const Dpdetails=()=>{
    const {id} = useParams();
    const {name} = useParams();
    return(
        <div>
            <h1>This is Dynamic product details of {id} {name}</h1>
            
        </div>
    )
}
export default Dpdetails;