import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertSucess = ({texto, show, onClick, lg, className}) => {
       return (
        <Alert className={className } variant="success" show={show}  lg={lg}> <strong><h3> {texto}</h3></strong><hr></hr><div className="d-flex justify-content-end">
        <Button onClick={onClick} variant="outline-success"> Fechar</Button> </div>
      </Alert>
    )
}

export default AlertSucess
