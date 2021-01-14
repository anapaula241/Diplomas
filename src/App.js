
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Login from './componentes/Login/Login';


const App = () => {
  return (

    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Login></Login>} />
          
    </Routes>
  </BrowserRouter>

    
   
  );
};

export default App;
