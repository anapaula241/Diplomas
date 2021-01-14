import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Textarea = ({className, size, lg, label, name, register, rows, onChange, value, textoErro }) => {
    return (
        
            <Form.Group className={className} size={size} as={Col} lg={lg}>
              <Form.Label>{label}</Form.Label>
              <Form.Control name={name} as="textarea" ref={register} value={value} rows={rows}  onChange={onChange}/>
              <Form.Text className='error'><p>{textoErro}</p></Form.Text>
            </Form.Group>
        
    )
}

export default Textarea
