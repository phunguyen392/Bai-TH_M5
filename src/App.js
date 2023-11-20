import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import Show from './pages/Show';






function App() {
  return (
    <div className="App">

  <Routes>

    <Route path='/product' element={< Product />} />
    <Route path='product/create' element={< Create />} />
    <Route path='product/edit/:id' element={< Edit />} />
    <Route path='product/delete/:id' element={< Delete />} />
    <Route path='product/show/:id' element={< Show />} />



  </Routes>

    </div>
  );
}

export default App;
