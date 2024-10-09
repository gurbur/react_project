import './App.css';
import NavbarExample from './components/NavbarExample';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import HomePage from './pages/HomePage';

function App() {
  const [isLogin, setLogin] = useState(false);
  function handleClickLogin() {
    setLogin(!isLogin);
  }

  return (
    <div>
      <header>
        <NavbarExample isLogin={isLogin} onClickLogin={handleClickLogin} />
      </header>
    <Routes>
      <Route path="/" element={<HomePage isLogin={isLogin} setLogin={setLogin}/>}/>
      <Route path="/detail" element={<Detail />}/>
      <Route path="/about" element={<div>어바웃 페이지입니다</div>}/>
    </Routes>
    <footer>
        <p>Assignment from Do-iT! IT communicating club of Ajou Univ.</p>
      </footer>
    </div>
  );
}

export default App;
