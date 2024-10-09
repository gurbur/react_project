import './App.css';
import NavbarExample from './components/NavbarExample';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Detail from './pages/Detail';
import HomePage from './pages/HomePage';

// TODO: API에서 axios로 GET요청 보내서 값 받아오기, React query까지 공부해오기


const dummy_data = [
  { title:"title1", top_line:"top line 1", id:0 },
  { title:"title2", top_line:"top line 2", id:1 },
  { title:"title3", top_line:"top line 3", id:2 },
  { title:"title4", top_line:"top line 4", id:3 },
];



function App() {
  const [isLogin, setLogin] = useState(false);
  
  let response
  useEffect(() => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((response)=>{
        console.log(response.data);
      });
  }, []);
   

  
  function handleClickLogin() {
    setLogin(!isLogin);
  }
  return (
    <div>
      <header>
        <NavbarExample isLogin={isLogin} onClickLogin={handleClickLogin} />
      </header>
    <Routes>
      <Route path="/" element={<HomePage isLogin={isLogin} setLogin={setLogin} writings={dummy_data}/>}/>
      <Route path="/detail/:id" element={<Detail writings={dummy_data}/>}/>
      <Route path="/about" element={<div>어바웃 페이지입니다</div>}/>

    </Routes>
    <footer>
        <p>Assignment from Do-iT! IT communicating club of Ajou Univ.</p>
      </footer>
    </div>
  );
}

export default App;
