

import React, { useState } from "react";
import { useEffect } from "react";
import ProductModel from "../models/ProductModel";
import { Link } from "react-router-dom";

function Product(props) {
  const [products, setProducts] = useState([]);

  //goi api 1 lan
  useEffect(() => {
    ProductModel.all().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
<h1>ProductList</h1>
 <Link to={'create/' }>Create</Link> 

<table className="" border={1}>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Descripton</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    {
                        products.length ? products.map((product, key) => (
                            <tr key={key}>
                                <td> {product.id} </td>
                                <td> {product.name} </td>
                                <td> {product.price} </td>
                                <td> {product.stock} </td>
                                <td> {product.description} </td>
                                
                                <td> <Link to={'edit/' + product.id}>Edit</Link> 
                                 <Link to={'delete/' + product.id}>Delete</Link> 
                                 <Link to={'show/' + product.id}>Show</Link> </td>
                            </tr>
                        )) : ''
                    }
    </tbody>

</table>

    </div>
  )
}


export default Product