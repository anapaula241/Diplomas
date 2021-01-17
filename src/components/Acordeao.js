import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdAdd, MdRemove } from "react-icons/md";
import { Link } from 'react-router-dom';
import {GrDocumentTransfer } from "react-icons/gr";
import { FaCashRegister, FaRegListAlt} from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";

const Acordeao = () => {
    const [accordion1, setAcordion1] = React.useState(true);
    const [accordion2, setAcordion2] = React.useState(true);
    const [accordion3, setAcordion3] = React.useState(true);
    const [accordion4, setAcordion4] = React.useState(true);
    return (
        <Accordion className=' mr-2 ' style={{  marginTop:'10px'}}>
            <Card style={{ borderWidth: '5px', backgroundColor: '#3c6178'}}>
                <Card.Header >
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => setAcordion1(!accordion1)} style={{ color: '#FFFFFF' , fontSize:'18px'}}  >
                      <FaCashRegister className='mr-2 mb-1'></FaCashRegister>  Cadastros {accordion1 ? (<MdAdd className='ml-3'></MdAdd>) : (<MdRemove className='ml-3'></MdRemove>)}

                    </Accordion.Toggle >
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className='ml-4'>
                        <div > <Link className='link' to="/cadastro/diploma">Diploma</Link></div>  
                        <hr></hr>
                        <div ><Link className='link' to="/cadastro/instituicao">Instituição</Link></div>
                        <hr></hr>
                        <div ><Link className='link' to="/cadastro/curso">Curso</Link></div>
                        <hr></hr>
                        <div ><Link className='link' to="/cadastro/cursoOfertado">Curso Ofertado</Link></div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{ borderWidth: '5px', backgroundColor: '#3c6178' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={() => setAcordion2(!accordion2)} style={{ color: '#FFFFFF', fontSize:'18px' }}>
                     <BiTransfer className='mr-2' ></BiTransfer>   Operações{accordion2 ? (<MdAdd className='ml-3'></MdAdd>) : (<MdRemove className='ml-3'></MdRemove>)}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className='ml-3'>
                        <Link className='link' to="/operacoes/livroRegistro">Livro Registro</Link>
                        <hr></hr>
                        <Link className='link' to="/operacoes/analiseDiploma">Análise Diploma</Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{ borderWidth: '5px', backgroundColor: '#3c6178' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={() => setAcordion3(!accordion3)} style={{ color: '#FFFFFF', fontSize:'18px' }}>
                     <FaRegListAlt className='mr-2'></FaRegListAlt>   Consultas {accordion3 ? (<MdAdd className='ml-3'></MdAdd>) : (<MdRemove className='ml-3'></MdRemove>)}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className='ml-3'>
                        <Link className='link' to="/consulta/diplomas">Diplomas</Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{ borderWidth: '5px', backgroundColor: '#3c6178' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" onClick={() => setAcordion4(!accordion4)} style={{ color: '#FFFFFF', fontSize:'18px'}}>
                      <RiToolsFill className='mr-2'></RiToolsFill>  Ferramentas {' '} 
                        {accordion4 ? (<MdAdd className='ml-2'></MdAdd>) : (<MdRemove className='ml-2'></MdRemove>)}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className='ml-3'>
                        <Link className='link' to="/ferramentas/manutencaoDiploma">Manutenção de Diploma</Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

export default Acordeao
