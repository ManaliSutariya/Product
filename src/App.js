import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './componet/Product.js';
import {Route,Routes} from 'react-router-dom';
import Detail from './componet/Detail.js';


function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={ <Product/> } />
        <Route path="Detail/:id" element={ <Detail/> } />
      </Routes>
    </>
  );
}

export default App;