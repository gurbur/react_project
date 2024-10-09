import './App.css';
import NavbarExample from './components/NavbarExample';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import HomePage from './pages/HomePage';

const writings = [
  { title:"title1", top_line:"top line 1", id:0 },
  { title:"title2", top_line:"top line 2", id:1 },
  { title:"title3", top_line:"top line 3", id:2 },
  { title:"title4", top_line:"top line 4", id:3 },
];

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
      <Route path="/" element={<HomePage isLogin={isLogin} setLogin={setLogin} writings={writings}/>}/>
      <Route path="/detail/:id" element={<Detail writings={writings}/>}/>
      <Route path="/about" element={<div>어바웃 페이지입니다</div>}/>

    </Routes>
    <footer>
        <p>Assignment from Do-iT! IT communicating club of Ajou Univ.</p>
      </footer>
    </div>
  );
}

export default App;
