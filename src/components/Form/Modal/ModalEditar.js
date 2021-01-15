import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalEditarCadastro({show, onHide, className,  children, texto}) {
    return (
        <Modal  size="lg" show={show} onHide={onHide} backdrop="static" keyboard={false}  >

        <Modal.Header closeButton>
    <Modal.Title className={className}>{texto}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         {children}
        </Modal.Body>

      

      </Modal>
    )
}

export default ModalEditarCadastro
