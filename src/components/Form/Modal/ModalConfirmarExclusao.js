import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalConfirmarExclusao = ({showExcluir, onHide, className, texto, cancelar, delet})=> {
    return (
        <Modal show={showExcluir} onHide={onHide}>

        <Modal.Header closeButton>
          <Modal.Title className={className}>Excluir Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>{texto}</Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={cancelar}>
            Cancelar
          </Button>
          <Button type='button' variant="danger" onClick={delet}>
            Apagar
          </Button>
        </Modal.Footer>

      </Modal>
    );
}

export default ModalConfirmarExclusao

