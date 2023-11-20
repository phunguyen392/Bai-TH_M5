import React, { useEffect, useState } from "react";


import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ProductModel from "../models/ProductModel"


function Show() {
    const params = useParams();
    const [product, setProduct] = useState([]);



    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await ProductModel.find(params.id);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [params.id]);



    return (
        <>
            <h1>Show {params.id}</h1>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>


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
                    <tr >
                        <td> {product.id} </td>
                        <td> {product.name} </td>
                        <td> {product.price} </td>
                        <td> {product.stock} </td>
                        <td> {product.description} </td>

                        <td> <Link to={'/product'}>Back</Link>
                        </td>
                    </tr>
                </tbody>
                </table>
            </>
            );
}

            export default Show;