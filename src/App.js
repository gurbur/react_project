import './App.css';
import NavbarExample from './components/NavbarExample';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Detail from './pages/Detail';
import HomePage from './pages/HomePage';
import React from 'react';
import { Nav } from 'react-bootstrap';
import MyCart from './pages/MyCart';

// TODO: 장바구니 구현하기

export let Context1 = React.createContext();

function App() {
  const [isLogin, setLogin] = useState(() => {
    return sessionStorage.getItem("isLogin") === "true";
  });

  const [products, setProducts] = useState([]);
  
  let [tab, setTab] = useState(0);
  
  useEffect(() => {
    sessionStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  let response
  useEffect(() => {
    axios
      .get("http://43.201.55.59/products")
      .then((response)=>{
        console.log(response.data);
        setProducts(response.data);
      });
      if(!localStorage.getItem("watched")) {
        localStorage.setItem("watched", JSON.stringify( [] ));
      }
      if (!localStorage.getItem("inCart")) {
        localStorage.setItem("inCart", JSON.stringify( [] ));
      }
  }, []);
  
  function handleClickLogin() {
    setLogin(!isLogin);
  }

  return (
    <div>
      <Context1.Provider value={ {tab, setTab} }>
        <header>
          <NavbarExample isLogin={isLogin} onClickLogin={handleClickLogin} />
        </header>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        
        <Routes>
          <Route path="/" element={<HomePage isLogin={isLogin} setLogin={setLogin} products={products}/>}/>
          <Route path="/detail/:id" element={<Detail products={products}/>}/>
          <Route path="/about" element={<div>어바웃 페이지입니다</div>}/>
          <Route path="/cart" element={<MyCart products={products}/>} />
        </Routes>
        <footer>
          <p>Assignment from Do-iT! IT communicating club of Ajou Univ.</p>
        </footer>
      </Context1.Provider>
    </div>
  );
}

export default App;
