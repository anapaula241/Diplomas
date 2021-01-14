import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Form/Input';

const LoginCreate = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [show, setShow] = React.useState(true);
    const [showErro, setShowErro] = React.useState(true);
    const navigate = useNavigate();
    const handleComeBack = () => navigate('/login');
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="container animeLeft grid grid-template-areas-2">
            <div class='titleGrid'><h1 className="mt-2 login title" >Cadastre-se</h1></div>
            <div className='content' >
                <Alert className="col-md-12 " show={show} variant="success" > <strong><h3>  Seu Cadastro foi realizado com Sucesso !</h3></strong><hr></hr><div className="d-flex justify-content-end ">
                    <Button onClick={() => setShow(false)} variant="outline-success"> Fechar </Button> </div>
                </Alert>
                <Alert className="col-md-12 " show={showErro} variant="danger"><strong><h3> Seu Cadastro não foi realizado ! </h3></strong><hr></hr><div className="d-flex justify-content-end ">
                    <Button onClick={() => setShowErro(false)} variant="outline-danger"> Fechar </Button> </div>
                </Alert>

                <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
                    <Form.Row>
                        <Input lg="12" label='Nome' name='name' size='lg' register={register({ required: true })} value={name} type='text' textoErro={errors.name && "Campo Nome é obrigatório"} onChange={(event) => setName(event.target.value)}></Input>
                    </Form.Row>

                    <Form.Row>
                        <Input lg="12" label='Email' name='email' size='lg' register={register({ required: true })} value={name} type='email' textoErro={errors.email && "Campo Email é obrigatório"} onChange={(event) => setEmail(event.target.value)}></Input>
                    </Form.Row>

                    <Form.Row>
                        <Input lg="12" label='Senha' name='password' size='lg' register={register({ required: true })} value={password} type='password' textoErro={errors.password && "Campo Senha é obrigatório"} onChange={(event) => setPassword(event.target.value)}></Input>
                    </Form.Row>

                    {loading ? (<Button disabled className=" mr-2 mt-3" size='lg' variant="primary" type="submit"> Cadastrando...</Button>
                    ) : (<Button className=" mr-2 mt-3" size='lg' variant="primary" type="submit"> Cadastrar </Button>)}
                    <Button className=" mt-3 " size='lg' variant="secondary" onClick={handleComeBack} >Voltar</Button>
                </Form>
            </div>
        </div>
    );
};

export default LoginCreate;

