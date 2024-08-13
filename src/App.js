import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import ViewAllVisitors from './components/ViewAllVisitors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<AddVisitor/>}/>
        <Route path='/view' element={<ViewAllVisitors/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
