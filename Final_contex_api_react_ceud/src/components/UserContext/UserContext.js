import React, { useState, createContext } from "react"

export const UserContext = createContext();


 export const UserProvider =(props) =>{
    const [users, setUsers] = useState([
        { id: 1, pname: "Huawei", image:"jpg", unitprice:90000,quantity:2,description:"details" },
        { id: 2, pname: "Iphone", image:"jpg", unitprice:120000,quantity:1,description:"details" },
        { id: 3, pname: "Samsung", image:"jpg", unitprice:98000,quantity:3,description:"details" },
        
      ]);
      
   
      return (
        <UserContext.Provider value={[users, setUsers]}>
          {props.children}
        </UserContext.Provider>
      );

 }