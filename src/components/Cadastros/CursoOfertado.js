import React from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { FaUserEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Acordeao from '../Acordeao';
import Input from '../Form/Input';
import ModalEditar from '../Form/Modal/ModalEditar';
import ModalConfirmarExclusao from '../Form/Modal/ModalConfirmarExclusao';
import AlertSucess from '../Form/Alertas/AlertSucess';
import AlertError from '../Form/Alertas/AlertError';
import Select from '../Form/Select';

const CursoOfertado = () => {
    const [dados, setDados] = React.useState([
        { id: '1',institution:'UFLA',name: 'Engenharia', habilitacao:'habilitacao', level:'level', modality:'modality' },
        { id: '2', institution:'UEMG',name: 'Português', habilitacao:'habilitacao' , level:'level', modality:'modality'}
    ]);
    const [name, setName] = React.useState(''); 
    const [institution, setInstitution] = React.useState('');
    const [courseCode, setCourseCode] = React.useState('');
    const [book, setBook] = React.useState('');
    const [noRecord, setNoRecord] = React.useState(false);
    const [loading, setLoading] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [showExcluir, setShowExcluir] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [showAlertSucessDelet, setShowAlertSucessDelet] = React.useState(false);
  const [showAlertErrorDelet, setShowAlertErrorDelet] = React.useState(false);
    const [table, setTable] = React.useState(false);
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const handleShowExcluir = (e, id) => setShowExcluir(true);
    const handleShow = () => setShow(true);
    const handleCloseExcluirCancelar = () => setShowExcluir(false);
    const handleClose = () => setShow(false);
    const handleInclude = () => navigate('/cadastro/incluirCursoOfertado');

    const onSubmit = (data) => {
        // simulando dados do banco - início
        const dados = ([
            { id: '1',institution:'UFLA',name: 'Engenharia', habilitacao:'habilitacao', level:'level', modality:'modality' },
            { id: '2', institution:'UEMG',name: 'Português', habilitacao:'habilitacao' , level:'level', modality:'modality'}
        ]);
        // simulando dados do banco - fim

        const dadosBanco = dados.filter((dado) => dado.institution == institution || dado.name == name);

        if (dadosBanco != '') {
            setTable(true);
            setNoRecord(false);

        } else {
            setNoRecord(true);
            setTable(false);
        }
    };

    const handleDelete = (e, id) => {
        const novosDados = [...dados]
        novosDados.splice(novosDados.indexOf({ id }), 1);
        setDados(novosDados)
        setShowExcluir(false); 
        setTable(false)
        setShowAlertSucessDelet(true)
        setShowAlertErrorDelet(true)
        setName('');
    };
    return (
         <div className="row justify-content-end container animeLeft">
            <div className="col-10">
        <div className="container animeLeft ">
            <div class='titleGrid'>  <h1 className="mt-2 login title" >Cadastro de Curso Ofertado</h1></div>
          
            <div className='content' >
               {showAlertSucessDelet && <AlertSucess texto='Registro Excluído com sucesso !' show={showAlertSucessDelet} className='col-md-10' onClick={() => setShowAlertSucessDelet(false)}></AlertSucess>} 
               {showAlertErrorDelet && <AlertError texto='Erro na Exclusão do registro !'  show={showAlertErrorDelet} className='col-md-10'  onClick={() => setShowAlertErrorDelet(false)}></AlertError>} 
                <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
                <Form.Row>
                        <Input size='lg' lg='10' label='Instituição' name='institution' value={institution} type='text' register={register({ required: true })} textoErro={errors.institution && "Nome do Instituição é obrigatório"} placeholder='Nome da Instituição' onChange={(event) => setInstitution(event.target.value)}></Input>
                    </Form.Row>

                    <Form.Row>
                        <Input size='lg' lg='10' label='Curso' name='name' value={name} type='text' register={register({ required: true })} textoErro={errors.name && "Nome do Curso é obrigatório"} placeholder='Nome do Curso' onChange={(event) => setName(event.target.value)}></Input>
                    </Form.Row>

                    {loading ? (<Button size='lg' disabled className=" mt-3 " variant="warning" type="submit"> Pesquisando...</Button>
                    ) : (<Button size='lg' className=" mt-3 " variant="warning" type="submit"> Pesquisar </Button>)}
                    {/* <Button className="col-lg-2 ml-3 mt-3" variant="secondary" type="button" href="/cadastro/incluirCadastroDiploma" > Incluir </Button> */}
                    <Button size='lg' className="ml-3 mt-3" variant="secondary" type="button" onClick={handleInclude} > Incluir </Button>

                </Form>

                {table && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-10  mt-3 animeLeft">
                    <thead >
                        <tr>
                        <th>ID</th>
                            <th>Instituição</th>
                            <th>Curso</th>
                            <th>Habilitação</th>
                            <th>Grau</th>
                            <th>Modalidade</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table && dados
                            .filter((dado) => dado.institution == institution || dado.name == name).map(({ id, institution, name, habilitacao,level, modality  }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                     <td>{institution}</td>
                                    <td>{name}</td>
                                    <td>{habilitacao}</td>
                                    <td>{level}</td>
                                    <td>{modality}</td>                                    
                                    
                                    <td>

                                        <FaUserEdit size='2em' color='#3c6178' title="Editar" onClick={handleShow} ></FaUserEdit >
                                        <RiDeleteBin6Line className='ml-3 mt-1' size='1.9em' color='#c32b3f' title="Excluir" onClick={handleShowExcluir}></RiDeleteBin6Line>
                                        {/* <FaTrashAlt className='deletar-icons ' title="Excluir" onClick={handleShowExcluir} ></FaTrashAlt> */}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table> </div>}
                {noRecord && <div className='mt-5 mb-5' style={{ color: "#c32b3f" }}><h3>Nenhum registro Encontrado</h3></div>}
               
            </div>

            <ModalEditar show={show} onHide={handleClose} className='subtitleModal ' texto='Editar Cadastro de Diplomas' onClick={handleClose}>
                <Form className="mt-4 container">
                    <Form.Row>
                        <Input size='lg' lg='10' label='Curso' name='name' type='text' register={register({ required: true })} textoErro={errors.name && "Nome do Curso é obrigatório"} onChange={(event) => setName(event.target.value)}></Input>
                    </Form.Row>

                    <Form.Row>
                        <Select lg='5' size='lg' label='Livro' value={book} name='book' register={register({ required: true })} options={['DSRD-8', 'DSRD-7']} textoErro={errors.book && "Campo Livro é obrigatório"} onChange={({ target }) => setBook(target.value)}></Select>
                        <Select lg='5' size='lg' label='Código do Curso' value={courseCode} name='courseCode' register={register({ required: true })} options={['112', '113']} textoErro={errors.courseCode && "Campo Código do Curso é obrigatório"} onChange={({ target }) => setCourseCode(target.value)}></Select>
                    </Form.Row>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Fechar </Button>
                        <Button variant="primary">Salvar alterações</Button>
                    </Modal.Footer>
                </Form>
            </ModalEditar>

            <ModalConfirmarExclusao showExcluir={showExcluir} onHide={handleCloseExcluirCancelar} className='subtitleModal'
                cancelar={handleCloseExcluirCancelar} delet={(e) => handleDelete()} texto='Tem certeza que deseja excluir o item selecionado !' > </ModalConfirmarExclusao>

        </div>
        </div>
        </div>
    )
}

export default CursoOfertado
