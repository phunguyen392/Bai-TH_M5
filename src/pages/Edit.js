import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ProductModel from "../models/ProductModel";



function Edit(props) {
    let navigate = useNavigate();
    const params = useParams();
    const [id,setId] = useState(0);
    const [items,setItems] = useState([]);
    const [formData,setFormData] = useState({
        'name' : '',
        'price' : '',
        'stock' : '',
        'description' : '',
    })


    // Chạy 1 lần duy nhất
    useEffect( () => {
        setId( params.id );

        ProductModel.find(params.id).then( (res) => {
            setFormData(res.data);
        })
        // Thiết lập data cho form data
        // setFormData( products[params.id] )
    },[] );
    

    const handleSubmit = (values) => {
        let data = values;
        ProductModel.update( params.id, data ).then( (res) => {
            alert('Thành công')
            // Chuyển hướng
            navigate("/product")
        }).catch( (res) => {
            alert('Thất bại')
        })
    }
    return (
        <div>
            <h1>Edit {params.id}</h1>
            <Formik
                initialValues={formData}
                onSubmit={ (values) => handleSubmit(values)  }
                enableReinitialize={true}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" />
                      

                        <label htmlFor="price">Price</label>
                        <Field name="price" />
                      
                        <label htmlFor="stock">stock</label>
                        <Field name="stock" />

                        <label htmlFor="description">description</label>
                        <Field name="description" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Edit;