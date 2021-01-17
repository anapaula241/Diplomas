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


const IncluirCadastroInstituicao = () => {
    const [institution, setInstitution] = React.useState('');
    const [graduationCode, setGraduationCode] = React.useState('');
    const [postGraduationCode, setPostGraduationCode] = React.useState('');
    const [responsible, setResponsible] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [graduationEmail, setGraduationEmail] = React.useState('');
    const [emailPostGraduation, setEmailPostGraduation] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [zipCode, setZipCode] = React.useState('');
    const [institutionType, setInstitutionType] = React.useState('externa');
    const [sendEmailReviews, setSendEmailReviews] = React.useState('nao');
    const [noRecord, setNoRecord] = React.useState(false);
    const [loading, setLoading] = React.useState('');
    const [showAlertSucessInclude, setShowAlertSucessInclude] = React.useState(false);
    const [showAlertErrorInclude, setShowAlertErrorInclude] = React.useState(true);
    const [show, setShow] = React.useState(false);
    const [showExcluir, setShowExcluir] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [table, setTable] = React.useState(false);
    const [search, setSearch,] = React.useState(false);
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    const handleShowExcluir = (e, id) => setShowExcluir(true);
    const handleShow = () => setShow(true);
    const handleCloseExcluirCancelar = () => setShowExcluir(false);
    const handleClose = () => setShow(false);
    const handleInclude = () => navigate('/cadastro/incluirCadastroDiploma');

    // simulando dados do banco - início
    const [dados, setDados] = React.useState([
        { id: '1', institution: 'UEMG', graduationCode: '1', postGraduationCode: '5', email: 'anapaula241@yahoo.com.br' },
        { id: '2', institution: 'UFLA', graduationCode: '1', postGraduationCode: '5', email: 'anapaula241@yahoo.com.br' }
    ]);

    const onSubmit = (data) => {
        setTable(true);
        setSearch(true);

        console.log(data);
        //  if (dados.aluno != aluno ) {
        //   setNenhumRegistro(true);
        //   setTabela(false);
        // }

    };
    const handleDelete = (e, id) => {
        const novosDados = [...dados]
        novosDados.splice(novosDados.indexOf({ id }), 1);
        setDados(novosDados)
        console.log(id);
        console.log(novosDados);
        setShowExcluir(false);
        console.log(novosDados);
        // setShowAlert(true);
        setInstitution('');
    };

    return (
        <div className="row justify-content-end container animeLeft">
            <div className="col-10">
                <div class='titleGrid'>  <h1 className="mt-2 login title" >Cadastro de Instituições</h1></div>

                <div className='content' >
                    {showAlertSucessInclude && <AlertSucess texto='Registro Incluído com Sucesso !' show={showAlertSucessInclude} className='col-md-10' onClick={() => setShowAlertSucessInclude(false)}></AlertSucess>}
                    {showAlertErrorInclude && <AlertError texto='Erro na Inclusão do Registro !' show={showAlertErrorInclude} className='col-md-10' onClick={() => setShowAlertErrorInclude(false)}></AlertError>}
                    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">

                        <Form.Row>
                            <Input size='lg' lg='10' label='Instituição' name='institution' value={institution} type='text' register={register({ required: true })} textoErro={errors.institution && "Nome do Instituição é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setInstitution(event.target.value)}></Input>
                        </Form.Row>

                        <Form.Label>Código do Curso</Form.Label>
                        <Form.Row>
                            <Input size='lg' lg='5' label='Graduação' name='graduationCode' value={graduationCode} type='text' register={register({ required: true })} textoErro={errors.graduationCode && "Campo Graduação é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setGraduationCode(event.target.value)}></Input>
                            <Input size='lg' lg='5' label='Pós-Graduação' name='postGraduationCode' value={postGraduationCode} type='text' register={register({ required: true })} textoErro={errors.postGraduationCode && "Campo Pós-Graduação é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setPostGraduationCode(event.target.value)}></Input>
                        </Form.Row>

                        <Form.Row>
                            <Input size='lg' lg='10' label='Responsável' name='responsible' value={responsible} type='text' register={register({ required: true })} textoErro={errors.responsible && "Campo Responsável é obrigatório"} placeholder='Nome do Responsável' onChange={(event) => setResponsible(event.target.value)}></Input>

                        </Form.Row>

                        <Form.Row>
                            <Input size='lg' lg='3' label='Telefone' name='telephone' value={telephone} type='text' register={register({ required: true })} textoErro={errors.telephone && "Campo Telefone é obrigatório"}  onChange={(event) => setTelephone(event.target.value)}></Input>
                            <Input size='lg' lg='7' label='Email da Graduação' name='graduationEmail' value={graduationEmail} type='email' register={register({ required: true })} textoErro={errors.graduationEmail && "Campo Email da Graduação é obrigatório"} onChange={(event) => setGraduationEmail(event.target.value)}></Input>
                        </Form.Row>

                        <Form.Row>
                            <Input size='lg' lg='10' label='Email da Pós-Graduação' name='emailPostGraduation' value={emailPostGraduation} type='email' register={register({ required: true })} textoErro={errors.emailPostGraduation && "Campo Email da Pós-Graduação é obrigatório"} onChange={(event) => setEmailPostGraduation(event.target.value)}></Input>
                        </Form.Row>

                        <Form.Row>
                            <Input size='lg' lg='10' label='Endereço' name='address' value={address} type='text' register={register({ required: true })} textoErro={errors.address && "Campo Endereço é obrigatório"} onChange={(event) => setAddress(event.target.value)}></Input>
                        </Form.Row>

                        <Form.Row>
                            <Input size='lg' lg='5' label='Bairro' name='district' value={district} type='text' register={register({ required: true })} textoErro={errors.district && "Campo Bairro é obrigatório"} onChange={(event) => setDistrict(event.target.value)}></Input>
                            <Select lg='5' size='lg' label='Cidade' value={city} name='city' register={register({ required: true })} options={['Belo Horizonte', 'São Paulo', 'Rio de Janeiro']} textoErro={errors.city && "Campo Cidade é obrigatório"} onChange={({ target }) => setCity(target.value)}></Select>
                        </Form.Row>

                        <Form.Row>
                            <Select lg='5' size='lg' label='Estado' value={state} name='state' register={register({ required: true })} options={['Belo Horizonte', 'São Paulo', 'Rio de Janeiro']} textoErro={errors.city && "Campo Estado é obrigatório"} onChange={({ target }) => setState(target.value)}></Select>
                            <Input size='lg' lg='5' label='Cep' name='zipCode' value={zipCode} type='text' register={register({ required: true })} textoErro={errors.zipCode && "Campo Cep é obrigatório"} onChange={(event) => setZipCode(event.target.value)}></Input>
                        </Form.Row>

                        <Form.Label className='mr-3'>Tipo Instituiçao</Form.Label>
                        <Form.Check type='radio' inline ref={register({ required: true })} name='institutionType' value="interna" checked={institutionType === 'interna'} onChange={({ target }) => setInstitutionType(target.value)} label='interna' />
                        <Form.Check type='radio' inline ref={register({ required: true })} name='institutionType' value="externa" checked={institutionType === 'externa'} onChange={({ target }) => setInstitutionType(target.value)} label='externa' />
                        <Form.Text className='error'><p>{errors.institutionType && "Campo tipo Instituição é obrigatório"}</p></Form.Text>

                        <Form.Label className='mr-3'>Enviar Email das Análises </Form.Label>
                        <Form.Check type='radio' inline ref={register({ required: true })} name='sendEmailReviews' value="sim" checked={sendEmailReviews === 'sim'} onChange={({ target }) => setSendEmailReviews(target.value)} label='sim' />
                        <Form.Check type='radio' inline ref={register({ required: true })} name='sendEmailReviews' value="nao" checked={sendEmailReviews === 'nao'} onChange={({ target }) => setSendEmailReviews(target.value)} label='nao' />
                        <Form.Text className='error'><p>{errors.institutionType && "Campo Enviar Email das Análises é obrigatório"}</p></Form.Text>



                        {loading ? (<Button variant="primary" size='lg' className="col-lg-2 mb-4 ml-3 mt-4 mr-2 " type="button" onClick={handleInclude} > Salvando... </Button>
                        ) : (<Button size='lg' className="col-lg-2 mt-4 mr-2 mb-4 " variant="primary"   type="submit"> Salvar </Button>)}

                        {loading ? (<Button size='lg' disabled className="col-lg-2 mt-4 " variant="warning" type="submit"> Pesquisando...</Button>
                        ) : (<Button size='lg' className="col-lg-2 mt-4 mb-4 " variant="warning" type="submit"> Pesquisar </Button>)}

                        <Button size='lg' className=" ml-2 mt-4 mb-4" variant="secondary" type="button" onClick={handleInclude} > Nova Inclusão </Button>


                    </Form>

                    {/* tabela de resultados Encontrados - início */}
                    {/* {table && dados.length > 0 && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-11  mt-3 animeLeft"> */}
                    {table && dados.length > 0 && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-10  mt-3 animeLeft">
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
                            {search && dados
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
                    {noRecord && <p>Nenhum registro Encontrado</p>}
                    {/* tabela de resultados Encontrados - fim */}
                </div>

                <ModalEditar show={show} onHide={handleClose} className='subtitleModal ' texto='Editar Cadastro de Diplomas' onClick={handleClose}>
                    <Form className="mt-4">
                        <Form.Row>
                            <Input size='lg' lg='10' label='Instituição' name='institution' value={institution} type='text' register={register({ required: true })} textoErro={errors.institution && "Nome do Instituição é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setInstitution(event.target.value)}></Input>
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
    )
}

export default IncluirCadastroInstituicao

