import React, { Component, useState, useEffect } from "react";
import "../App.css";
import WishlistDisplayComp from "../components/wishlist-display";
import { useAuth0 } from "@auth0/auth0-react";


export default function Wishlist() {


  const [ products, setProducts ] = useState(null);
  const [ isLoaded, setLoading ] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();  // console.log('wish', user)
  
  useEffect(() =>  {

    if( !isLoaded && !isLoading ) {
      fetch('/getWishlist/' + user.email)
        .then(res => res.json())
        .then(result => {
         setProducts(result);
          setLoading(true);
          console.log(result.wishlist)
      });
    }
  });



 
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
        // console.log(products.wishlist)
        return (
          <div style={{marginTop: "15%"}}> 
              <WishlistDisplayComp lst = {products.wishlist}/>
              {/* <h1>{products.wishlist}</h1> */}
          </div>
      );
    }   
    
  
}

 