import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home";
import Mapfun from './Components/Elements/Mapfun';

function App() {
  return (
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path='/' element={<Home/>} />
    <Route index path='mapfun' element={<Mapfun/>} />
   </Routes>
   </Base>
   </BrowserRouter>
   </>
  );
}

export default App;
