import './App.css';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from './Components/Carousel/Carousel';
import Rodape from './Components/Rodape/Rodape';
import Produtos  from './Pages/Produtos/Produtos';
import Pesquisa from './Pages/Pesquisa/Pesquisa';
import Marcas from './Components/Marcas/Marcas';
function App() {
  return (
    <div className="App">
       <div className='principal'>
        <Router>
        <Header/>

        <Routes>
         <Route path='/Home' element={<Carrossel/>}/> 
         <Route path='/Produtos' element={<Produtos/>}/>
         <Route path='/Pesquisa' element={<Pesquisa/>}/>
        </Routes>
       
        </Router>
    </div>
   <Carrossel/>
   <div className='principal'>
    <h3> Marcas mais vendidas</h3>
    <Marcas/>
   </div>


   <Rodape/>
    </div>
    
    
  );
}

export default App;
