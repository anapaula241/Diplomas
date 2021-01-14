import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Input from '../Form/Input';
// import {UserContext} from '../UserContext';

const LoginForm = () => {
  // const [data, setData] = React.useState('');
  const [masp, setMasp] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState('');
  const navigate = useNavigate();
  const handleRegister = () => navigate('/login/criar');
  const handleLogIn = () => navigate('/login/telaPrincipal');
  const { register, handleSubmit, errors } = useForm();
  // console.log(data);
  const onSubmit = data => {
    setLoading(true);
    console.log(data);
    setTimeout(function () { handleLogIn(); }, 1000);
  };

// const dados = React.useContext(UserContext);

  return (
    <div className="container animeLeft grid grid-template-areas-2">
        <div class='titleGrid'><h1 className="mt-2 login title" >Login</h1></div>
        <div className='content' >
                   <Form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
            <Form.Row>
              <Input lg="12" label='Masp' name='masp' size='lg' register={register({ required: true })} value={masp} type='number' placeholder="Seu Masp" textoErro={errors.masp && "Campo Masp é obrigatório"} onChange={(event) => setMasp(event.target.value)}></Input>
            </Form.Row>

            <Form.Row>
              <Input lg="12" label='Senha' name='password' size='lg' register={register({ required: true })} value={password} type='text' placeholder="Sua Senha" textoErro={errors.password && "Campo Senha é obrigatório"} onChange={(event) => setPassword(event.target.value)}></Input>
            </Form.Row>

            {loading ? (<Button size='lg' disabled className=" mb-4" variant="primary" type="submit"> Carregando...</Button>
            ) : (<Button size='lg' className="col-lg-2 mb-4" variant="primary" type="submit"> Entrar </Button>)}

          </Form>

          <div className="mt-4 mb-4  subtitle "><Link className="my-5" to="/login/perdeu">Esqueceu a Senha?</Link></div>
          <div className=" subtitle mt-3 "> Cadastre-se</div>  
          <p className="mt-3 mb-3">Ainda não possui conta? Cadastre-se agora.</p>
          <Button size='lg' className=" mt-2 mb-4" onClick={handleRegister} >Cadastro</Button>
         </div>
     </div>
  );
};

export default LoginForm;
