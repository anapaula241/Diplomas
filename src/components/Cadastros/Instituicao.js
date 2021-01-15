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


const Instituicao = () => {
    const [dados, setDados] = React.useState([
        { id: '1', institution: 'UEMG', graduationCode: '1', postGraduationCode: '5', email: 'anapaula241@yahoo.com.br' },
        { id: '2', institution: 'UFLA', graduationCode: '1', postGraduationCode: '5', email: 'anapaula241@yahoo.com.br' }
    ]);
    const [institution, setInstitution] = React.useState('');
    const [noRecord, setNoRecord] = React.useState(false);
    const [loading, setLoading] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [showExcluir, setShowExcluir] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [table, setTable] = React.useState(false);
    const [showAlertSucessDelet, setShowAlertSucessDelet] = React.useState(false);
    const [showAlertErrorDelet, setShowAlertErrorDelet] = React.useState(false);
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    const handleShowExcluir = (e, id) => setShowExcluir(true);
    const handleShow = () => setShow(true);
    const handleCloseExcluirCancelar = () => setShowExcluir(false);
    const handleClose = () => setShow(false);
    const handleInclude = () => navigate('/cadastro/incluirCadastroInstituicao');

    const onSubmit = (data) => {
         // simulando dados do banco - início
    const dados =([
        { id: '1', institution: 'UEMG', graduationCode: '1', postGraduationCode: '5', email: 'anapaula241@yahoo.com.br' },
        { id: '2', institution: 'UFLA', graduationCode: '1', postGraduationCode: '5', email: 'anapaula241@yahoo.com.br' }
    ]);
    // simulando dados do banco - início

        const dadosBanco = dados.filter((dado) => dado.institution == institution);

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
        setInstitution('');
    };

      return (
        <div className="container animeLeft ">
            <div class='titleGrid'>  <h1 className="mt-2 login title" >Cadastro de Instituições</h1></div>
            
            <div className='content' >
               {showAlertSucessDelet && <AlertSucess texto='Registro Excluído com sucesso !' show={showAlertSucessDelet} className='col-md-12' onClick={() => setShowAlertSucessDelet(false)}></AlertSucess>} 
               {showAlertErrorDelet && <AlertError texto='Erro na Exclusão do registro !'  show={showAlertErrorDelet} className='col-md-12'  onClick={() => setShowAlertErrorDelet(false)}></AlertError>} 
                <Form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">

                    <Form.Row>
                        <Input size='lg' lg='12' label='Instituição' name='institution' value={institution} type='text' register={register({ required: true })} textoErro={errors.institution && "Nome do Instituição é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setInstitution(event.target.value)}></Input>
                    </Form.Row>


                    {loading ? (<Button size='lg' disabled className="col-lg-2 mt-3 " variant="primary" type="submit"> Pesquisando...</Button>
                    ) : (<Button size='lg' className="col-lg-2 mt-3 " variant="primary" type="submit"> Pesquisar </Button>)}
                    {/* <Button className="col-lg-2 ml-3 mt-3" variant="secondary" type="button" href="/cadastro/incluirCadastroDiploma" > Incluir </Button> */}
                    <Button size='lg' className="col-lg-2 ml-3 mt-3" variant="secondary" type="button" onClick={handleInclude} > Incluir </Button>

                </Form>

                {/* tabela de resultados Encontrados - início */}
                {/* {table && dados.length > 0 && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-11  mt-3 animeLeft"> */}
                {table && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-12  mt-3 animeLeft">
                    <thead >
                        <tr>
                            <th >ID</th>
                            <th>Instituiçao</th>
                            <th>Cod.GRAD.</th>
                            <th>Cod.Pos</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                       { table && dados
                            .filter((dado) => dado.institution == institution).map(({ id, institution, graduationCode, postGraduationCode }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{institution}</td>
                                    <td>{graduationCode}</td>
                                    <td>{postGraduationCode}</td>
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
                {/* tabela de resultados Encontrados - fim */}
            </div>

            <ModalEditar show={show} onHide={handleClose} className='subtitleModal ' texto='Editar Cadastro de Diplomas' onClick={handleClose}>
                <Form className="mt-4">
                    <Form.Row>
                        <Input size='lg' lg='12' label='Instituição' name='institution' value={institution} type='text' register={register({ required: true })} textoErro={errors.institution && "Nome do Instituição é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setInstitution(event.target.value)}></Input>
                    </Form.Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Fechar </Button>
                        <Button variant="primary">Salvar </Button>
                    </Modal.Footer>
                </Form>
            </ModalEditar>

            <ModalConfirmarExclusao showExcluir={showExcluir} onHide={handleCloseExcluirCancelar} className='subtitleModal'
                cancelar={handleCloseExcluirCancelar} delet={(e) => handleDelete()} texto='Tem certeza que deseja excluir o item selecionado !' > </ModalConfirmarExclusao>

        </div>
    )
}

export default Instituicao
