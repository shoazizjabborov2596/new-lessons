import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './react-redux/Home';
import Create from './react-redux/Create';
import Update from './react-redux/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
     return(
  <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
   </Routes>
  </BrowserRouter>
     )


   
  

}

export default App;
  