import React from 'react'
// import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';



const Input = ({ lg, label, value, register, name, className, ref, placeholder, type, size, onChange, textoErro }) => {
    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data => console.log(data);
    return (
        <Form.Group as={Col} lg={lg} >
            <Form.Label>{label}</Form.Label>
            <Form.Control className={className} ref={ref} size ={size} value={value} ref={register} name={name} placeholder={placeholder} type={type} onChange={onChange} />
            <Form.Text className='error'><p>{textoErro}</p></Form.Text>
        </Form.Group>
    )
}

export default Input
