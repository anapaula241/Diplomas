import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import Input from '../Form/Input';
import AlertSucess from '../Form/Alertas/AlertSucess';


const LoginPasswordLost = () => {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);

    const handleAlertSucess = () => setShowAlert(!showAlert);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
        setTimeout(function () { setShowAlert(true) }, 1000);
        setTimeout(function () { setLoading(false) }, 1100);
    }

    return (
        <div className="container animeLeft grid grid-template-areas-2">
            <div class='titleGrid'><h1 className="mt-2 login title" >Esqueceu a senha?</h1></div>
            <div className='content' >
                {/* {showAlert && <Alert texto='Email Enviado com Sucesso ! ' lg='8' show={showAlert} onClick={() => setShowAlert(false)}>Email Enviado com Sucesso !</Alert>} */}
                <AlertSucess>Erro no Envio do Email !</AlertSucess>

                <Form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
                    <Form.Row>
                        <Input lg="12" label='Email' name='email' size='lg' register={register({ required: true })} value={email} type='email' placeholder="Seu email" textoErro={errors.email && "Campo email é obrigatório"} onChange={(event) => setEmail(event.target.value)}></Input>
                    </Form.Row>

                    {loading ? (<Button disabled variant="primary" type="submit"> Enviando...</Button>)
                        : (<Button variant="primary" type="submit"> Enviar Email </Button>)}
                </Form>
            </div>
        </div>
    );
};

export default LoginPasswordLost;
