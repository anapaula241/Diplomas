import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Select = ({ label, textoErro, lg, options, value, setValue,name, size,  onChange, register}) => {
    return (
        <Form.Group as={Col} lg={lg}>
        <Form.Label>{label}</Form.Label>
        <Form.Control value={value}  size ={size}  ref={register} name={name} onChange={onChange} as="select">
        <option value="" disabled> Selecione uma opção... </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        </Form.Control>
        <Form.Text className='error'><p>{textoErro}</p></Form.Text>
      </Form.Group>
  
    )
}

export default Select
