import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ProductModel from '../models/ProductModel';

function Delete(props) {
    let navigate = useNavigate();
    const params = useParams();
    const [id,setId] = useState(0);

    const handleDelete = (id) => {
        ProductModel.destroy(id).then((res) => {
            alert('Thành công');
            // Chuyển hướng
            navigate("/product")
        }).catch((res) => {
            alert('Thất bại');
        })
    }

    return (
        <div>
           <h1>Delete</h1> 
           <button onClick={ () => handleDelete( params.id ) }>Xóa</button>
           <Link to={'/product'}>Back</Link>
        </div>
    );
}

export default Delete;