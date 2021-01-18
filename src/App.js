import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks';
import Header from './Header';
import Login from './components/Login/Login';
import HomeScreen from './components/HomeScreen';
import Diploma from './components/Cadastros/Diploma';
import IncluirCadastroDiploma from './components/Cadastros/IncluirCadastroDiploma';
import Curso from './components/Cadastros/Curso';
import Diplomas from './components/Consultas/Diplomas';
import LivroRegistro from './components/Operacoes/LivroRegistro';
import DiplomaVisualizar from './components/Consultas/DiplomaVisualizar';
import LoginCreate from './components/Login/LoginCreate';
import ManutencaoDiploma from './components/Ferramentas/ManutencaoDiploma';
import ManutencaoDiplomaAlterar from './components/Ferramentas/ManutencaoDiplomaAlterar';
import Instituicao from './components/Cadastros/Instituicao';
import IncluirCadastroInstituicao from './components/Cadastros/IncluirCadastroInstituicao';
import CursoOfertado from './components/Cadastros/CursoOfertado';
import IncluirCursoOfertado from './components/Cadastros/IncluirCursoOfertado';
import IncluirCadastroCurso from './components/Cadastros/IncluirCadastroCurso';
import AnaliseDiploma from './components/Operacoes/AnaliseDiploma';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles gi/>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomeScreen></HomeScreen>} />
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/login/*" element={<Login></Login>} />
            <Route path="/cadastro/diploma" element={<Diploma></Diploma>} />
            <Route path="/cadastro/instituicao" element={<Instituicao></Instituicao>} />
            <Route path="/cadastro/curso" element={<Curso></Curso>} />
            <Route path="/cadastro/cursoOfertado" element={<CursoOfertado></CursoOfertado>} />           
            <Route path="/consulta/diplomas" element={<Diplomas></Diplomas>} />                    
            <Route path="/ferramentas/manutencaoDiploma" element={<ManutencaoDiploma></ManutencaoDiploma>} />
            <Route path="/operacoes/livroRegistro" element={<LivroRegistro></LivroRegistro>} />
            <Route path="/operacoes/analiseDiploma" element={<AnaliseDiploma></AnaliseDiploma>} />
            <Route path="/ferramentas/manutencaoDiploma" element={<ManutencaoDiploma></ManutencaoDiploma>} />
          </Routes>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
