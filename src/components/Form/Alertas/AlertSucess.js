import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {RiCloseCircleLine} from "react-icons/ri";

const AlertSucess = ({texto, show, onClick, lg, className}) => {
       return (
        <Alert className={className } variant="success" show={show}  lg={lg}> <strong><h3> {texto}</h3></strong><hr></hr><div className="d-flex justify-content-end">
          <RiCloseCircleLine size='2em' onClick={onClick} variant="outline-success"> </RiCloseCircleLine> </div>
        {/* <Button onClick={onClick} variant="outline-success"> Fechar</Button> </div> */}
      </Alert>
    )
}

export default AlertSucess
