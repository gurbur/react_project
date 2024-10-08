import './App.css';
import Cards from './Cards';
import NavVertical from './NavVerticall';
import NavbarExample from './NavbarExample';
import { useState } from 'react';

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

      <div className="container">
        <aside>
            <NavVertical/>
        </aside>
        <main>
          <section className="blog-posts">
            <Cards/>
          </section>
        </main>
        
      </div>

      <footer>
        <p>Assignment from Do-iT! IT communicating club of Ajou Univ.</p>
        <p>Made by Jihwan Kim. Contact: gurbur331@ajou.ac.kr</p>
      </footer>
    </div>
  );
}

export default App;
