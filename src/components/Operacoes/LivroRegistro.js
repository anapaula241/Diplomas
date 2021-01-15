import React from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Input from '../Form/Input';
import Acordeao from '../Acordeao';
import Select from '../Form/Select';

const LivroRegistro = () => {
    const [book, setBook] = React.useState('');
    const [homePage, setHomePage] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="container animeLeft ">
            <div class='titleGrid'>  <h1 className="mt-2 login title" >Relatório Registro de Livros</h1></div>
            
            <div className='content' >
                <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
                    <Form.Row>
                        <Select lg='12' size='lg' label='Livro' value={book} name='book' register={register({ required: true })} options={['livro1', 'livro2']} textoErro={errors.book && "Campo livro é obrigatório"} onChange={(event) => setBook(event.target.value)}></Select>
                    </Form.Row>

                    <Form.Row>
                        <Input size='lg' lg='12' label='Pagina Inicial' name='homePage' value={homePage} type='text' register={register({ required: true })} textoErro={errors.homePage && "Campo Página Inicial é obrigatória"} placeholder='Número da Página' onChange={(event) => setHomePage(event.target.value)}></Input>
                    </Form.Row>

                    {loading ? (<Button size='lg' disabled className=" mt-3 " variant="primary" type="submit"> Carregando...</Button>
                    ) : (<Button  size='lg' className="ol-lg-3 mt-3 " variant="primary" type="submit"> Carregar PDF </Button>)}
                </Form>
            </div>
        </div>
    );
}

export default LivroRegistro
