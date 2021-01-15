import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Form/Input';
import AlertSucess from '../Form/Alertas/AlertSucess';
import AlertError from '../Form/Alertas/AlertError';

const LoginCreate = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [showAlertSucess, setShowAlertSucess] = React.useState(false);
    const [showAlertError, setShowAlertError] = React.useState(false);
    const navigate = useNavigate();
    const handleComeBack = () => navigate('/login');
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="container animeLeft ">
            <div class='titleGrid'><h1 className="mt-2 login title" >Cadastre-se</h1></div>
            <div className='content' >
                
            {showAlertSucess && <AlertSucess texto='Seu Cadastro foi Criado com Sucesso !' show={showAlertSucess} className='col-md-12' onClick={() => setShowAlertSucess(false)}></AlertSucess>} 
               {showAlertError && <AlertError texto='Houve um Erro na Criação do Seu Cadastro !'  show={showAlertError} className='col-md-12'  onClick={() => setShowAlertError(false)}></AlertError>} 

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

