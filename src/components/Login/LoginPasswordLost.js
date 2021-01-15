import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import Input from '../Form/Input';
import AlertSucess from '../Form/Alertas/AlertSucess';
import AlertError from '../Form/Alertas/AlertError';


const LoginPasswordLost = () => {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const [showAlertSucess, setShowAlertSucess] = React.useState(true);
    const [showAlertError, setShowAlertError] = React.useState(false);

    const handleAlertSucess = () => showAlertSucess(true);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
        setTimeout(function () { setShowAlertSucess(true) }, 1000);
        setTimeout(function () { setLoading(false) }, 1100);
    }

    return (
        <div className="container animeLeft ">
            <div class='titleGrid'><h1 className="mt-2 login title" >Esqueceu a senha?</h1></div>
            <div className='content' >

                {showAlertSucess && <AlertSucess texto='Email Enviado com sucesso !' show={showAlertSucess} className='col-md-12' onClick={() => setShowAlertSucess(false)}></AlertSucess>} 
               {showAlertError && <AlertError texto='Erro no Envio do Email !'  show={showAlertError} className='col-md-12'  onClick={() => setShowAlertError(false)}></AlertError>} 
   

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
