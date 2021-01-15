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


const Diploma = () => {
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
  const [show, setShow] = React.useState(false);
  const [showAlertSucessDelet, setShowAlertSucessDelet] = React.useState(true);
  const [showAlertErrorDelet, setShowAlertErrorDelet] = React.useState(true);

  const [showExcluir, setShowExcluir] = React.useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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


  const onSubmit = (data) => {

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
  const handleInclude = () => navigate('/cadastro/incluirCadastroDiploma');

  return (
    <div className="container animeLeft  mb-5  ">
      <div class='titleGrid'><h1 className="mt-2 login title" >Cadastro de Diplomas</h1></div>
    
      <div className='content' >
        {showAlertSucessDelet && <AlertSucess texto='Registro Excluído com sucesso !' show={showAlertSucessDelet} className='col-md-12' onClick={() => setShowAlertSucessDelet(false)}></AlertSucess>}
        {showAlertErrorDelet && <AlertError texto='Erro na Exclusão do registro !'  show={showAlertErrorDelet} className='col-md-12' onClick={() => setShowAlertErrorDelet(false)}></AlertError>}

        <Form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">

          <Form.Row>
            {initialDate == '' && finalDate == '' ? (<Input size='lg' lg="12" label='Aluno' name='name'  register={register({ required: true })} value={name} type='text' textoErro={errors.name && "Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>) :
              (<Input size='lg' lg='12' label='Aluno' name='name' value={name} type='text' register={register({ required: false })} textoErro={errors.name && "Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>)}
          </Form.Row>

          <Form.Row >
            {name == '' ? (<Input size='lg' lg="5" label='Data' name='initialDate' register={register({ required: true })} value={initialDate} type='date' textoErro={errors.initialDate && "Data inicial é obrigatória"} onChange={(event) => setInitialDate(event.target.value)}></Input>) :
              (<Input size='lg' lg='5' label='Data' name='initialDate' value={initialDate} type='date' register={register({ required: false })} textoErro={errors.initialDate && "Data inicial é obrigatória"} onChange={(event) => setInitialDate(event.target.value)}></Input>)}
            <p className="mt-5 mr-3 ml-3"> a </p>
            {name == '' ? (<Input size='lg' lg="5" className='mt-2' label='' name='finalDate' register={register({ required: true })} value={finalDate} type='date' textoErro={errors.finalDate && "Data Final é obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>) :
              (<Input size='lg' lg='5' label='Data' className='mt-2' name='finalDate' value={finalDate} type='date' register={register({ required: false })} textoErro={errors.finalDate && "Data Final é obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>)}
          </Form.Row>

          {loading ? (<Button size='lg' disabled className=" mt-3 " variant="warning" type="submit"> Pesquisando...</Button>
          ) : (<Button size='lg' className=" mt-3 " variant="warning" type="submit"> Pesquisar </Button>)}
          <Button size='lg' className=" ml-3 mt-3" variant="secondary" type="button" onClick={handleInclude} > Incluir </Button>

        </Form>

        {/* tabela de resultados Encontrados - início */}
        {table && <div > <h5 className="mt-5"> Resultados Encontrados:</h5><Table striped bordered hover className=" col-lg-12  mt-3 animeLeft">
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

      <ModalEditar show={show} onHide={handleClose} className='subtitleModal ' texto='Editar Cadastro de Diplomas'>
        <Form className="mt-4 containerModal">
          <Form.Row>
            <Input lg="12" label='Aluno' name='name' register={register({ required: false })} value={name} type='text' textoErro={errors.name && "Nome do Aluno é obrigatória"} onChange={(event) => setName(event.target.value)}></Input>
          </Form.Row>
          <Form.Row>
            <Input lg="5" label='Data' name='initialDate' register={register({ required: false })} value={initialDate} type='date' textoErro={errors.initialDate && "Data inicial é obrigatória"} onChange={(event) => setInitialDate(event.target.value)}></Input>
            <p className="mt-5 mr-3 ml-3"> a </p>
            <Input lg="5" className='mt-2' label='' name='finalDate' register={register({ required: true })} value={finalDate} type='date' textoErro={errors.finalDate && "Data Final é obrigatória"} onChange={(event) => setFinalDate(event.target.value)}></Input>
          </Form.Row>
          <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}> Fechar </Button>
          <Button variant="primary">Salvar alterações</Button>
        </Modal.Footer>
        </Form>
      </ModalEditar>

      <ModalConfirmarExclusao showExcluir={showExcluir} onHide={handleCloseExcluirCancelar} className='subtitleModal'
        cancelar={handleCloseExcluirCancelar} delet={(e) => handleDelete()} texto='Tem certeza que deseja excluir o item selecionado !' > </ModalConfirmarExclusao>

    </div>
  );
}

export default Diploma
