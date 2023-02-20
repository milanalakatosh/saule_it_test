import { Route, Routes } from 'react-router-dom';
import './App.css';
import BagCart from './components/BagCart/BagCart';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/bag" element={<BagCart />} />
    </Routes>
  );
}

export default App;
