import { Routes, Route } from 'react-router-dom';
import Logo from '../logo/Logo';
import UnderConstruction from '../../pages/UnderConstruction';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Logo />
      <Routes>
        <Route path='/' element={<UnderConstruction />} />
      </Routes>
    </div>
  )
}

export default App
