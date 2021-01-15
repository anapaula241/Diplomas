
import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {RiCloseCircleLine} from "react-icons/ri";

const AlertError = ({texto, show, onClick, lg, className}) => {
    return (
        <Alert className={className }show={show} variant="danger" lg={lg}> <strong><h3> {texto}</h3></strong><hr></hr><div className="d-flex justify-content-end">
        <RiCloseCircleLine size='2em' onClick={onClick} variant="outline-danger"> </RiCloseCircleLine> </div>
      </Alert>
    )
}

export default AlertError
