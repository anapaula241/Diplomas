import React from 'react'
import useMaskInput from 'use-mask-input';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
// import { event } from 'jquery';
import { nativeTouchData } from 'react-dom/test-utils';
import { useNavigate } from 'react-router-dom';
import AlertSucess from '../Form/Alertas/AlertSucess';
import Acordeao from '../Acordeao';
import AlertError from '../Form/Alertas/AlertError';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Textarea from '../Form/Textarea';
// import {valida_cpf , valida} from '../validaCpf';

const DiplomaVisualizar = () => {
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
  const [level, setLevel] = React.useState('');
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
  const [status, setStatus] = React.useState([]);
  const [note, setNote] = React.useState('');
  const [showAlertSuccessRegister, setShowAlertSuccessRegister] = React.useState(true);
  const [showAlertErrorRegister, setShowAlertErrorRegister] = React.useState(true);

  const [loading, setLoading] = React.useState('');
  // const [erroCpf, setErroCpf] = React.useState('');
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();

  // simulando dados do banco 
  const [dados, setDados] = React.useState([
    { id: '1', aluno: 'luk', instituição: 'UEMG', data: '01/05/10' }
  ]);

  const onSubmit = (data) => console.log(data);

  const maskedCPFRef = useMaskInput({
    mask: ['999.999.999-99'],
    register: register({ required: true }),
  })

  const handleBack = () => navigate('/consulta/diplomas/');

  function handleChange({ target }) {
    if (target.checked) {
      setStatus([...status, target.value]);
    } else {
      setStatus(status.filter((item) => item !== target.value));
    }
  }

  const handleChecked = (item) => { return status.includes(item); }

  // const handleCpf = ({ target }) => valida(target.value);

  return (
    <div className="row justify-content-end container animeLeft">
      <div className="col-10">
        <div class='titleGrid'><h1 className="mt-2 login title" >Consulta Analítica</h1></div>

        <div className='content' >
          {showAlertSuccessRegister && <AlertSucess texto='Registro Cadastrado com sucesso !' show={showAlertSuccessRegister} className='col-md-10' onClick={() => setShowAlertSuccessRegister(false)}></AlertSucess>}
          {showAlertErrorRegister && <AlertError texto='Houve um erro no seu Cadastro !' show={showAlertErrorRegister} className='col-md-10' onClick={() => setShowAlertErrorRegister(false)}></AlertError>}

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
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

            {loading ? (<Button size='lg' disabled className=" mt-3 " variant="warning" type="submit"> Pesquisando...</Button>
            ) : (<Button size='lg' className=" mt-3 mr-2 " variant="warning" type="submit"> Pesquisar </Button>)}
            <Button size='lg' className=" mt-3 " variant="secondary" type="submit" onClick={handleBack}> Voltar </Button>

          </Form>
        </div>
      </div>
    </div>

  );
}

export default DiplomaVisualizar
