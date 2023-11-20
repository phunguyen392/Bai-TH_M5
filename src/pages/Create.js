import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import ProductModel from "../models/ProductModel";



function Create(props) {
    let navigate = useNavigate();

    // Làm việc với dữ liệu
    const [items,setItems] = useState([]);
    const [formData,setFormData] = useState({
        'name' : '',
        'price' : '',
        'stock' : '',
        'description' : '',

    })


    const handleSubmit = (values) => {
        let data = values;
        ProductModel.store( data ).then( (res) => {
            console.log(data);
            alert('Thêm thành công');
            // Chuyển hướng
            navigate("/product")
        }).catch( (res) => {
            alert('Thêm thất bại')
        })
        

    }
    return (
        <div>
            <h1>Create</h1>
            <Formik
                initialValues={formData}
                onSubmit={ (values) => handleSubmit(values)  }
            >
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" />
                       

                        <label htmlFor="price">Price</label>
                        <Field name="price" />
                        

                        <label htmlFor="stock">Stock</label>
                        <Field name="stock" />

                        <label htmlFor="description">Description</label>
                        <Field name="description" />

                        <button type="submit">Submit</button>
                    </Form>
            </Formik>
        </div>
    );
}

export default Create;