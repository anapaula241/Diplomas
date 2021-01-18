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
import ModalEditar from '../Form/Modal/ModalEditar';
import Textarea from '../Form/Textarea';
import useMaskInput from 'use-mask-input';

const Diplomas = () => {
    // const [name, setName] = React.useState('');
    const [institution, setInstitution] = React.useState('');
    const [initialDate, setInitialDate] = React.useState('');
    const [finalDate, setFinalDate] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [loading, seLoading] = React.useState('');
    const [table, setTable] = React.useState(false);
    const [noRecord, setNoRecord] = React.useState(false);
    const [showEdit, setShowEdit] = React.useState(false);
    const [name, setName] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [nameFather, setNameFather] = React.useState('');
    const [nameMother, setNameMother] = React.useState('');
    const [nationality, setNationality] = React.useState('');
    const [state, setState] = React.useState('');
    const [ra, setRa] = React.useState('');
    const [diplomaTypes, setDiplomaTypes] = React.useState('');
    const [course, setCourse] = React.useState('');
    const [modality, setModality] = React.useState('');
    // const [level, setLevel] = React.useState('');
    const [yearConclusion, setYearConclusion] = React.useState('');
    const [dateGraduation, setDateGraduation] = React.useState('');
    const [processNumber, setProcessNumber] = React.useState('');
    const [processNumber1, setProcessNumber1] = React.useState('');
    const [processNumber2, setProcessNumber2] = React.useState('');
    const [registerNumber, setRegisterNumber] = React.useState('');
    const [book, setBook] = React.useState('');
    const [sheetNumber, setSheetNumber] = React.useState('');
    const [registrationDate, setRegistrationDate] = React.useState('');
    const [lotNumber, setLotNumber] = React.useState('');
    // const [status, setStatus] = React.useState([]);
    const [note, setNote] = React.useState('');
    const [showAlertSuccessRegister, setShowAlertSuccessRegister] = React.useState(false);
    const [showAlertErrorRegister, setShowAlertErrorRegister] = React.useState(false);


    const navigate = useNavigate();
    const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
    const [showExcluir, setShowExcluir] = React.useState(false);

    // simulando dados do banco 
    const [dados, setDados] = React.useState([
        { id: '1', name: 'luk', instituição: 'UEMG', data: '01/05/10', situacao: 'Liberado' },
        { id: '2', name: 'lulu', instituição: 'UFMG', data: '01/05/10', situacao: 'Liberado' }
    ]);

    const { register, handleSubmit, errors } = useForm();
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleTable = () => setTable(true);
    // const handleView = () => navigate('/consulta/diplomas/visualizar');

    function handleChange({ target }) {
        if (target.checked) {
          setStatus([...status, target.value]);
        } else {
          setStatus(status.filter((item) => item !== target.value));
        }
      }

      const handleChecked = (item) => { return status.includes(item); }

      const maskedCPFRef = useMaskInput({
        mask: ['999.999.999-99'],
        register: register({ required: true }),
      })
    
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
                                            <ImEyeMinus size='2em' className='ml-3' type='button' title="Visualizar"  onClick={handleShowEdit} ></ImEyeMinus >
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table> </div>}
                    {/* tabela de resultados Encontrados - fim */}
                    {noRecord && <p>Nenhum registro Encontrado</p>}

                     {/* Modal para Visualizar dados - início */}
        <ModalEditar show={showEdit} onHide={handleCloseEdit} className='subtitleModal' texto='Editar Cadastro de Diplomas'>
        <Form className="mt-4 containerModal " onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
              <Input size='lg' lg="5" label='Nome do Aluno' name='name' register={register({ required: true })} value={name} type='text' textoErro={errors.name && "Campo Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>
              <Input size='lg' lg="5" label='CPF' name='cpf' size='lg' register={maskedCPFRef} value={cpf} type='text' placeholder=" Número do CPF" textoErro={errors.cpf && "Campo Cpf é obrigatório"} onChange={(event) => setCpf(event.target.value)}></Input>
            </Form.Row>

            <Form.Row >
              <Input size='lg' lg="10" label='Nome do Pai' name='nameFather' register={register({ required: true })} value={nameFather} type='text' textoErro={errors.nameFather && "Campo Nome do Pai é obrigatória"} placeholder='Nome do Pai' onChange={(event) => setNameFather(event.target.value)}></Input>
            </Form.Row>

            <Form.Row >
              <Input size='lg' lg="10" label='Nome da Mãe' name='nameMother' register={register({ required: true })} value={nameFather} type='text' textoErro={errors.nameMother && "Campo Nome da Mãe é obrigatória"} placeholder='Nome da Mãe' onChange={(event) => setNameMother(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Input size='lg' lg="5" label='Naturalidade' name='nationality' register={register({ required: true })} value={nationality} type='text' textoErro={errors.nationality && "Campo Naturalidade é obrigatório"} placeholder='Naturalidade' onChange={(event) => setNationality(event.target.value)}></Input>
              <Select lg='5' size='lg' label='Estado' value={state} name='state' register={register({ required: true })} options={['Minas Gerais', 'São Paulo', 'Rio de Janeiro']} textoErro={errors.state && "Campo Estado é obrigatório"} onChange={({ target }) => setState(target.value)}></Select>
            </Form.Row>

            <Form.Row>
              <Input size='lg' lg="5" label='Matrícula' name='ra' register={register({ required: true })} value={ra} type='text' textoErro={errors.ra && "Campo Matrícula é obrigatório"} placeholder='Número da Matrícula' onChange={(event) => setRa(event.target.value)}></Input>
              <Input size='lg' lg="5" label='Tipo Diploma' name='diplomaTypes' register={register({ required: true })} value={diplomaTypes} type='text' textoErro={errors.diplomaTypes && "Campo Tipo Diploma é obrigatório"} placeholder='Tipo do diploma' onChange={(event) => setDiplomaTypes(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Select lg='5' size='lg' label='Curso' value={course} name='course' register={register({ required: true })} options={['Engenharia', 'Português', 'Matemática']} textoErro={errors.course && "Campo Curso é obrigatório"} onChange={({ target }) => setCourse(target.value)}></Select>
              <Select lg='5' size='lg' label='Habilitacao' value={modality} name='modality' register={register({ required: true })} options={['Bacheralado', 'Licenciatura', 'Tecnólogo']} textoErro={errors.modality && "Campo Habilitação é obrigatório"} onChange={({ target }) => setModality(target.value)}></Select>
            </Form.Row>

            <Form.Row>
              <Input size='lg' lg="3" label='Ano Conclusão ' name='yearConclusion' register={register({ required: true })} value={yearConclusion} type='text' textoErro={errors.yearConclusion && "Campo Ano Conclusão é obrigatório"} onChange={(event) => setYearConclusion(event.target.value)}></Input>
              <Input size='lg' lg="3" label='Data Colação De Grau' name='dateGraduation' register={register({ required: true })} value={dateGraduation} type='date' textoErro={errors.dateGraduation && "Data inicial é obrigatória"} onChange={(event) => setDateGraduation(event.target.value)}></Input>
              <Input size='lg' lg="4" label='Num. Processo' name='processNumber' register={register({ required: true })} value={processNumber} type='text' textoErro={errors.processNumber && "Campo Num. Processo é obrigatório"} onChange={(event) => setProcessNumber(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Input size='lg' lg="3" label='Num. Processo 1' name='processNumber1' register={register({ required: true })} value={processNumber1} type='text' textoErro={errors.processNumber1 && "Campo Num. Processo 1 é obrigatório"} onChange={(event) => setProcessNumber1(event.target.value)}></Input>
              <Input size='lg' lg="3" label='Num. Processo 2' name='processNumber2' register={register({ required: true })} value={processNumber2} type='text' textoErro={errors.processNumber2 && "Campo Num. Processo 2 é obrigatório"} onChange={(event) => setProcessNumber2(event.target.value)}></Input>
              <Input size='lg' lg="4" label='Num. Registro' name='registerNumber' register={register({ required: true })} value={registerNumber} type='text' textoErro={errors.processNumber && "Campo Num. Registro 1 é obrigatório"} onChange={(event) => setRegisterNumber(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Input size='lg' lg="3" label='Livro' name='book' register={register({ required: true })} value={book} type='text' textoErro={errors.book && "Campo Livro é obrigatório"} onChange={(event) => setBook(event.target.value)}></Input>
              <Input size='lg' lg="3" label='Num.Lote' name='lotNumber' register={register({ required: true })} value={lotNumber} textoErro={errors.lotNumber && "Campo Num.Lote é obrigatório"} onChange={(event) => setLotNumber(event.target.value)}></Input>
              <Input size='lg' lg="4" label='Data de Registro' name='registrationDate' register={register({ required: true })} value={registrationDate} textoErro={errors.registrationDate && "Campo Data de Registro é obrigatória"} onChange={(event) => setRegistrationDate(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Select lg='5' size='lg' label='Situação' value={status} name='status' register={register({ required: true })} options={['Liberado', 'Em Diligência']} textoErro={errors.status && "Campo Situação é obrigatório"} onChange={({ target }) => setStatus(target.value)}></Select>
            </Form.Row>

            <Form.Group as={Col} lg="12">
              <Form.Label>Situação2</Form.Label>
              <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value="faltaDocumentosPessoais" checked={handleChecked('faltaDocumentosPessoais')} onChange={handleChange} label='Falta Documentos Pessoais' />
              <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='reconhecimentoCursoVencido' checked={handleChecked('reconhecimentoCursoVencido')} onChange={handleChange} label='Reconhecimento do Curso Vencido' />
              <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='erroDiploma' checked={handleChecked('erroDiploma')} onChange={handleChange} label='Erro No Diploma' />
              <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='erroTrancreverCarimboRegistroDiploma' checked={handleChecked('erroTrancreverCarimboRegistroDiploma')} onChange={handleChange} label='Erro ao Trancrever para o Carimbo de Registro no Diploma' />
              <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='DAEValorInferiorCorrespondente' checked={handleChecked('DAEValorInferiorCorrespondente')} onChange={handleChange} label='DAE com Valor Inferior ao Correspondente de R$ 77,33' />
              <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='erroHistorico' checked={handleChecked('erroHistorico')} onChange={handleChange} label='Erro no Histórico' />
              <Form.Text className='error'><p>{errors.checkbox && "Campo Situação2 é obrigatório"}</p></Form.Text>
            </Form.Group>

            <Form.Row>
              <Textarea label='Observação' name='note' lg='10' rows={4} size='lg' className='mt-3' register={register({ required: true })} onChange={({ target }) => setNote(target.value)} textoErro={errors.note && "Campo Situação é obrigatório"}></Textarea>
            </Form.Row>
            <Modal.Footer>
            {loading ? (<Button size='lg' disabled className=" mt-3 " variant="warning" type="submit"> Pesquisando...</Button>
            ) : (<Button size='lg' className=" mt-3 mr-2 " variant="warning" type="submit"> Pesquisar </Button>)}
<Button variant="secondary" onClick={handleCloseEdit}> Fechar </Button>
            </Modal.Footer>
          </Form>
        </ModalEditar>
        {/* Visualizar dados - fim */}
                </div>
            </div>
        </div>
    );
}


export default Diplomas
