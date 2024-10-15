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

const dtype = [
  { id:0, title:"babs", content:"dsf", price:1000 }
]



function App() {
  const [isLogin, setLogin] = useState(false);
  const [products, setProducts] = useState([]);
  
  let response
  useEffect(() => {
    axios
      .get("http://43.201.55.59/products")
      .then((response)=>{
        console.log(response.data);
        setProducts(response.data);
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
      <Route path="/" element={<HomePage isLogin={isLogin} setLogin={setLogin} products={products}/>}/>
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
