import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalEditarCadastro({show, onHide, className, onClick, children, texto}) {
    return (
        <Modal  size="lg" show={show} onHide={onHide} backdrop="static" keyboard={false}  >

        <Modal.Header closeButton>
    <Modal.Title className={className}>{texto}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         {children}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}> Fechar </Button>
          <Button variant="primary">Salvar alterações</Button>
        </Modal.Footer>

      </Modal>
    )
}

export default ModalEditarCadastro
