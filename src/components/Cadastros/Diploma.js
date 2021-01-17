import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'
import { FaUserEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";
// import { event } from 'jquery';
import ModalConfirmarExclusao from '../Form/Modal/ModalConfirmarExclusao';
import Acordeao from '../Acordeao';
import { useNavigate } from 'react-router-dom';
import AlertSucess from '../Form/Alertas/AlertSucess';
import AlertError from '../Form/Alertas/AlertError';
import ModalEditar from '../Form/Modal/ModalEditar';
import Input from '../Form/Input';
import Burger from '../Burger';
import Col from 'react-bootstrap/Col';
import Select from '../Form/Select';
import useMaskInput from 'use-mask-input';


const Diploma = () => {
  // Dados pagina principal - início
  const [dados, setDados] = React.useState([
    { id: '1', name: 'luk', instituição: 'UEMG', data: '01/05/10' },
    { id: '1', name: 'lara', instituição: 'UEMG', data: '01/05/10' }
  ]);
  const [name, setName] = React.useState('');
  const [initialDate, setInitialDate] = React.useState('');
  const [finalDate, setFinalDate] = React.useState('');
  const [loading, setLoading] = React.useState('');
  const [table, setTable] = React.useState(false);
  const [noRecord, setNoRecord] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [showInclude, setShowInclude] = React.useState(false);
  const [showAlertSucessDelet, setShowAlertSucessDelet] = React.useState(false);
  const [showAlertErrorDelet, setShowAlertErrorDelet] = React.useState(false);
  const [showExcluir, setShowExcluir] = React.useState(false);

  // Dados incluir - início
  const [rg, setRg] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [nameFather, setNameFather] = React.useState([]);
  const [nameMother, setNameMother] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [dateBirth, setDateBirth] = React.useState('');
  const [institution, setInstitution] = React.useState('');
  const [courseCode, setCourseCode] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [modality, setModality] = React.useState('');
  const [type, setType] = React.useState('');
  const [copyRegistration, setCopyRegistration] = React.useState('nao');
  const [foreignDocument, setForeignDocument] = React.useState('sim');
  const [semesterYearConclusion, setSemesterYearConclusion] = React.useState('');
  const [dateGraduation, setDateGraduation] = React.useState('');
  const [dateDispatch, setDateDispatch] = React.useState('');
  const [inclusionDate, setInclusionDate] = React.useState('');
  // const [showAlert, setShowAlert] = React.useState(false);
  // const [showAlertErro, setShowAlertErro] = React.useState(false);
  const [showAlertSucessInclude, setShowAlertSucessInclude] = React.useState(false);
  const [showAlertErrorInclude, setShowAlertErrorInclude] = React.useState(false);
  // const [loading, setLoading] = React.useState('');
  // Dados incluir - fim 

  // const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();
  const handleCloseEdit = () => setShowEdit(false);
  const handleCloseInclude = () => setShowInclude(false);
  const handleShowInclude = () => setShowInclude(true);
  const handleShowEdit = () => setShowEdit(true);
  const handleTable = () => setTable(true);
  const handleCloseExcluirCancelar = () => setShowExcluir(false);
  const handleShowExcluir = (e, id) => setShowExcluir(true);

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

  const handleCheckedType = ({ target }) => setType(target.checked);

  const maskedCPFRef = useMaskInput({
    mask: ['999.999.999-99'],
    register: register({ required: true }),
  })

  const onSubmit = (data) => {
console.log(data);
    // simulando dados do banco - início
    const dados = ([
      { id: '1', name: 'luk', instituição: 'UEMG', data: '01/05/10' },
      { id: '1', name: 'lara', instituição: 'UEMG', data: '01/05/10' }]);
    // simulando dados do banco - fim

    const dadosBanco = dados.filter((dado) => dado.name == name);

    if (dadosBanco != '') {
      setTable(true);
      setNoRecord(false);

    } else {
      setNoRecord(true);
      setTable(false);
    }

  };
  // const handleInclude = () => navigate('/cadastro/incluirCadastroDiploma');

  return (
    <div className="row justify-content-end container animeLeft">
      <div className="col-10">
        <div class='titleGrid'><h1 className="mt-2 login title" >Cadastro de Diplomas</h1></div>

        <div className='content' >
          {showAlertSucessDelet && <AlertSucess texto='Registro Excluído com sucesso !' show={showAlertSucessDelet} className='col-md-10 ' onClick={() => setShowAlertSucessDelet(false)}></AlertSucess>}
          {showAlertErrorDelet && <AlertError texto='Erro na Exclusão do registro !' show={showAlertErrorDelet} className='col-md-10 ' onClick={() => setShowAlertErrorDelet(false)}></AlertError>}

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">

            <Form.Row>
              {initialDate == '' && finalDate == '' ? (<Input size='lg' lg="10" label='Aluno' name='name' register={register({ required: true })} value={name} type='text' textoErro={errors.name && "Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>) :
                (<Input size='lg' lg='10' label='Aluno' name='name' value={name} type='text' register={register({ required: false })} textoErro={errors.name && "Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>)}
            </Form.Row>

            <Form.Row >
              {name == '' ? (<Input size='lg' lg="4" label='Data' name='initialDate' register={register({ required: true })} value={initialDate} type='date' textoErro={errors.initialDate && "Data inicial é obrigatória"} onChange={(event) => setInitialDate(event.target.value)}></Input>) :
                (<Input size='lg' lg='4' label='Data' name='initialDate' value={initialDate} type='date' register={register({ required: false })} textoErro={errors.initialDate && "Data inicial é obrigatória"} onChange={(event) => setInitialDate(event.target.value)}></Input>)}
              <p className="mt-5 mr-3 ml-3"> a </p>
              {name == '' ? (<Input size='lg' lg="4" className='mt-2' label='' name='finalDate' register={register({ required: true })} value={finalDate} type='date' textoErro={errors.finalDate && "Data Final é obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>) :
                (<Input size='lg' lg='4' label='Data' className='mt-2' name='finalDate' value={finalDate} type='date' register={register({ required: false })} textoErro={errors.finalDate && "Data Final é obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>)}
            </Form.Row>

            {loading ? (<Button size='lg' disabled className=" mt-3 " variant="warning" type="submit"> Pesquisando...</Button>
            ) : (<Button size='lg' className=" mt-3 " variant="warning" type="submit"> Pesquisar </Button>)}
            <Button size='lg' className=" ml-3 mt-3" variant="secondary" type="button" onClick={handleShowInclude}> Incluir </Button>

          </Form>

          {/* tabela de resultados Encontrados - início */}
          {table && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-10  mt-3 animeLeft">
            <thead >
              <tr>
                <th >ID</th>
                <th>Aluno</th>
                <th>Instituiçao</th>
                <th>Data Inclusão</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {table && dados
                .filter((dado) => dado.name == name).map(({ id, name, instituição, data }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{instituição}</td>
                    <td>{data}</td>
                    <td>

                      <FaUserEdit size='2em' color='#3c6178' title="Editar" onClick={handleShowEdit} ></FaUserEdit >
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

        {/* Modal para editar dados - início */}
        <ModalEditar show={showEdit} onHide={handleCloseEdit} className='subtitleModal' texto='Editar Cadastro de Diplomas'>
        <Form className="mt-4 containerModal " onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Input lg="10" label='Aluno' name='name' register={register({ required: true })} value={name} type='text' textoErro={errors.name && "Nome do Aluno é Obrigatório"} onChange={(event) => setName(event.target.value)}></Input>
            </Form.Row>
            <Form.Row>
              <Input lg="4" label='Data' name='initialDate' register={register({ required: true })} value={initialDate} type='date' textoErro={errors.initialDate && "Data inicial é Obrigatória"} onChange={(event) => setInitialDate(event.target.value)}></Input>
              <p className="mt-5 mr-3 ml-3"> a </p>
              <Input lg="4" className='mt-2' label='' name='finalDate' register={register({ required: true })} value={finalDate} type='date' textoErro={errors.finalDate && "Data Final é Obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>
            </Form.Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}> Fechar </Button>
              <Button variant="primary" type ='submit'>Salvar </Button>
            </Modal.Footer>
          </Form>
        </ModalEditar>
        {/* Editar dados - início */}

        {/* Modal para Incluir dados - início */}
        <ModalEditar show={showInclude} onHide={handleCloseInclude} className='subtitleModal ' texto='Incluir Cadastro de Diplomas'>
          <Form className="mt-4 containerModal " onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Input lg="5" label='CPF' name='cpf' size='lg' register={maskedCPFRef} value={cpf} type='text' placeholder=" Número do CPF" textoErro={errors.cpf && "Campo Cpf é obrigatório"} onChange={(event) => setCpf(event.target.value)}></Input>
              <Input lg="5" label='RG' name='rg' size='lg' register={register({ required: true })} value={rg} type='text' placeholder=" Número do RG" textoErro={errors.rg && "Campo RG é obrigatório"} onChange={(event) => setRg(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Input lg="10" label='Nome do Aluno' size='lg' name='name' register={register({ required: true })} value={name} type='text' placeholder='Nome do Aluno' textoErro={errors.name && "Campo Nome do Aluno é obrigatória"} onChange={(event) => setName(event.target.value)}></Input>
            </Form.Row>

            <Form.Label className="mr-3" >Sexo</Form.Label>
            <Form.Check type='radio' inline ref={register({ required: true })} name='gender' value="feminino" checked={gender === 'feminino'} onChange={({ target }) => setGender(target.value)} label='Feminino' />{' '}
            <Form.Check type='radio' inline ref={register({ required: true })} name='gender' value="masculino" checked={gender === 'masculino'} onChange={({ target }) => setGender(target.value)} label='Masculino' />
            <Form.Text className='error'><p>{errors.gender && "Campo Sexo é obrigatório"}</p></Form.Text>

            <Form.Row className=''>
              <Input lg="10" label='Nome do Pai' size='lg' name="nameFather" register={register({ required: true })} value={nameFather} type='text' placeholder='Nome do Aluno' textoErro={errors.nameFather && "Campo Nome do Pai é obrigatório"} onChange={(event) => setNameFather(event.target.value)}></Input>
            </Form.Row>

            <Form.Row className=''>
              <Input lg="10" label='Nome da Mãe' size='lg' name="nameMother" register={register({ required: true })} value={nameMother} type='text' placeholder='Nome da Mãe' textoErro={errors.nameMother && "Campo Mãe é obrigatório"} onChange={(event) => setNameMother(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Select lg='5' size='lg' label='País' value={country} name='country' register={register({ required: true })} options={['Brasil', 'Português']} textoErro={errors.country && "Campo País é obrigatório"} onChange={({ target }) => setCountry(target.value)}></Select>
              <Select lg='5' size='lg' label='Estado' value={state} name='state' register={register({ required: true })} options={['BH', 'Rio']} textoErro={errors.state && "Campo Estado é obrigatório"} onChange={({ target }) => setState(target.value)}></Select>
            </Form.Row>
            <Form.Row>
              <Select lg='5' size='lg' label='Cidade' value={city} name='city' register={register({ required: true })} options={['BH', 'Rio']} textoErro={errors.city && "Campo Cidade é obrigatório"} onChange={({ target }) => setCity(target.value)}></Select>
              <Input size='lg' lg="5" label='Data de Nascimento' value={dateBirth} name='dateBirth' register={register({ required: true })} type='date' textoErro={errors.initialDate && "Data de Nascimento é Obrigatório"} onChange={(event) => setDateBirth(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Input size='lg' lg='10' label='Instituição' name='institution' value={institution} type='text' register={register({ required: true })} textoErro={errors.institution && "Nome do Instituição é obrigatório"} placeholder='Nome do aluno' onChange={(event) => setInstitution(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Input size='lg' lg='10' label='Curso' name='name' value={name} type='text' register={register({ required: true })} textoErro={errors.name && "Nome do Curso é obrigatório"} placeholder='Nome do Curso' onChange={(event) => setName(event.target.value)}></Input>
            </Form.Row>
            <Form.Row>
              <Select lg='5' size='lg' label='Grau do curso' value={level} name='level' register={register({ required: true })} options={['Graduação', 'Pós Graduação', 'Apostila']} textoErro={errors.level && "Campo Grau do Curso  é obrigatório"} onChange={({ target }) => setLevel(target.value)}></Select>
              <Select lg='5' size='lg' label='Habilitacao' value={modality} name='modality' register={register({ required: true })} options={['Bacheralado', 'Licenciatura', 'Tecnólogo']} textoErro={errors.modality && "Campo Habilitação é obrigatório"} onChange={({ target }) => setModality(target.value)}></Select>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} lg="10">
                <Form.Label className='mr-3'>Tipo</Form.Label>
                <Form.Check inline type='checkbox' ref={register({ required: false })} name='type' value="type" onChange={handleCheckedType} label='Apostilamento' />
              </Form.Group>
            </Form.Row>
            <Form.Label className='mr-3' >Registro de 2º Via</Form.Label>
            <Form.Check type='radio' inline ref={register({ required: true })} name='copyRegistration' value="nao" checked={copyRegistration === 'nao'} onChange={({ target }) => setCopyRegistration(target.value)} label='Não' />
            <Form.Check type='radio' inline ref={register({ required: true })} name='copyRegistration' value="sim" checked={copyRegistration === 'sim'} onChange={({ target }) => setCopyRegistration(target.value)} label='Sim' />
            <Form.Text className='error'><p>{errors.copyRegistration && "Campo Sexo é obrigatório"}</p></Form.Text>

            <Form.Label className='mr-2'>Documento Estrangeiro</Form.Label>
            <Form.Check type='radio' inline ref={register({ required: true })} name='foreignDocument' value="nao" checked={foreignDocument === 'nao'} onChange={({ target }) => setForeignDocument(target.value)} label='Não' />
            <Form.Check type='radio' inline ref={register({ required: true })} name='foreignDocument' value="sim" checked={foreignDocument === 'sim'} onChange={({ target }) => setForeignDocument(target.value)} label='Sim' />
            <Form.Text className='error'><p>{errors.foreignDocument && "Campo Sexo é obrigatório"}</p></Form.Text>

            <Form.Row>
              <Input size='lg' lg="5" label='Ano/Semestre Letivo de Conclusão ' name='semesterYearConclusion' register={register({ required: true })} value={semesterYearConclusion} type='text' textoErro={errors.semesterYearConclusion && "Campo Ano/Semestre Letivo de Conclusão é obrigatório"} onChange={(event) => setSemesterYearConclusion(event.target.value)}></Input>
              <Input size='lg' lg="5" label='Data Colação De Grau' name='dateGraduation' register={register({ required: true })} value={dateGraduation} type='date' textoErro={errors.dateGraduation && "Campo Data inicial é obrigatória"} onChange={(event) => setDateGraduation(event.target.value)}></Input>
            </Form.Row>
            <Form.Row>

              <Input size='lg' lg="5" label='Data Expedição' name='dateDispatch' register={register({ required: true })} value={dateDispatch} type='date' textoErro={errors.dateGraduation && "Campo Data Expedição é obrigatória"} onChange={(event) => setDateDispatch(event.target.value)}></Input>
              <Input size='lg' lg="5" label='Data de Inclusão' value={inclusionDate} name='inclusionDate' register={register({ required: true })} type='date' textoErro={errors.inclusionDate && "Data de inclusão é Obrigatório"} onChange={(event) => setInclusionDate(event.target.value)}></Input>
            </Form.Row>

            <Form>
              <Form.Group>
                <Form.File label="Documentação" />
              </Form.Group>
            </Form>

            <Modal.Footer>
              {loading ? (<Button size='lg' disabled className=" mt-3 mr-2" variant="primary" type="submit"> Salvando...</Button>
              ) : (<Button size='lg' className=" mt-3 mr-2" variant="primary" type="submit"> Salvar </Button>)}
              {/* <Button className="col-lg-2 ml-3 mt-3" variant="secondary" type="button" href="/cadastro/incluirCadastroDiploma" > Incluir </Button> */}
              {loading ? (<Button size='lg' disabled className=" mt-3 " variant="warning" type="submit"> Pesquisando...</Button>
              ) : (<Button size='lg' className=" mt-3 mr-2" variant="warning" type="submit"> Pesquisar </Button>)}
              <Button size='lg' className=" mt-3 mr-2" variant="info">Nova Inclusão</Button>
            </Modal.Footer>
          </Form>
        </ModalEditar>
        {/* Modal para Incluir dados - fim */}

        <ModalConfirmarExclusao showExcluir={showExcluir} onHide={handleCloseExcluirCancelar} className='subtitleModal'
          cancelar={handleCloseExcluirCancelar} delet={(e) => handleDelete()} texto='Tem certeza que deseja excluir o item selecionado !' > </ModalConfirmarExclusao>
      </div>
    </div>
  );
}

export default Diploma
