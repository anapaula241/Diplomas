import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { ImEyeMinus } from "react-icons/im";
// import { BsFillEyeFill } from 'react-icons/bs';
// import { event } from 'jquery';
import { useNavigate } from 'react-router-dom';
import Acordeao from '../Acordeao';
import Input from '../Form/Input';
import Select from '../Form/Select';

const Diplomas = () => {
    const [name, setName] = React.useState('');
    const [institution, setInstitution] = React.useState('');
    const [initialDate, setInitialDate] = React.useState('');
    const [finalDate, setFinalDate] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [loading, seLoading] = React.useState('');
    const [table, setTable] = React.useState(false);
    const [noRecord, setNoRecord] = React.useState(false);
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);
    const [showExcluir, setShowExcluir] = React.useState(false);

    // simulando dados do banco 
    const [dados, setDados] = React.useState([
        { id: '1', name: 'luk', instituição: 'UEMG', data: '01/05/10', situacao: 'Liberado' },
        { id: '2', name: 'lulu', instituição: 'UFMG', data: '01/05/10', situacao: 'Liberado' }
    ]);

    const { register, handleSubmit, errors } = useForm();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleTable = () => setTable(true);
    const handleView = () => navigate('/consulta/diplomas/visualizar');

    const onSubmit = (data) => {
        setTable(true);
        console.log(data);
    };

    return (
        <div className="row justify-content-end container animeLeft">
            <div className="col-10">

                <div class='titleGrid'>  <h1 className="mt-2 login title" >Consulta Analítica</h1></div>

                <div className='content' >
                    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">

                        <Form.Row>
                            {initialDate == '' && finalDate == '' ? (<Input size='lg' lg="10" label='Aluno' name='name' register={register({ required: true })} value={name} type='text' textoErro={errors.name && "Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>) :
                                (<Input size='lg' lg='10' label='Aluno' name='name' value={name} type='text' register={register({ required: false })} textoErro={errors.name && "Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>)}
                        </Form.Row>

                        <Form.Row>
                            <Input size='lg' lg='10' label='Instituição' name='institution' value={institution} type='text' register={register({ required: true })} textoErro={errors.institution && "Nome do Instituição é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setInstitution(event.target.value)}></Input>
                        </Form.Row>

                        <Form.Row>
                            {name == '' ? (<Input size='lg' lg="4" label='Data' name='initialDate' register={register({ required: true })} value={initialDate} type='date' textoErro={errors.initialDate && "Data inicial é obrigatória"} onChange={(event) => setInitialDate(event.target.value)}></Input>) :
                                (<Input size='lg' lg='4' label='Data' name='initialDate' value={initialDate} type='date' register={register({ required: false })} textoErro={errors.initialDate && "Data inicial é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setInitialDate(event.target.value)}></Input>)}
                            <p className="mt-5 mr-3 ml-3"> a </p>
                            {name == '' ? (<Input size='lg' className='mt-2' lg="4" label='' name='finalDate' register={register({ required: true })} value={finalDate} type='date' textoErro={errors.finalDate && "Data Final é obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>) :
                                (<Input size='lg' lg='4' className='mt-2' name='finalDate' value={finalDate} type='date' register={register({ required: false })} textoErro={errors.finalDate && "Data Final é obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>)}
                        </Form.Row>

                        <Form.Row>
                            <Select lg='10' size='lg' label='Situação' value={status} name='status' register={register({ required: true })} options={['Liberado', 'Em Diligência']} textoErro={errors.status && "Campo situação é obrigatório"} onChange={({ target }) => setStatus(target.value)}></Select>
                        </Form.Row>

                        {loading ? (<Button size='lg' disabled className=" mt-3 " variant="warning" type="submit"> Pesquisando...</Button>
                        ) : (<Button size='lg' className="mt-3 " variant="warning" type="submit"> Pesquisar </Button>)}

                    </Form>

                    {/* tabela de resultados Encontrados - início */}
                    {table && dados.length > 0 && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-10  mt-3">
                        <thead >
                            <tr>
                                <th >ID</th>
                                <th>Aluno</th>
                                <th>Instituiçao</th>
                                <th>Data Registro</th>
                                <th>Situação </th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados
                                .filter((dado) => dado.name == name).map(({ id, aluno, instituição, data, situacao }) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{instituição}</td>
                                        <td>{data}</td>
                                        <td>{situacao}</td>
                                        <td>
                                            <ImEyeMinus size='2em' className='ml-3' type='button' title="Visualizar" onClick={handleView} ></ImEyeMinus >
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table> </div>}
                    {/* tabela de resultados Encontrados - fim */}
                    {noRecord && <p>Nenhum registro Encontrado</p>}
                </div>
            </div>
        </div>
    );
}


export default Diplomas
