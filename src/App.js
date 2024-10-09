import './App.css';
import Cards from './components/Cards';
import NavVertical from './components/NavVerticall';
import NavbarExample from './components/NavbarExample';
import { useState } from 'react';

const writings = [
  { title:"title1", top_line:"top line 1", id:1 },
  { title:"title2", top_line:"top line 2", id:2 },
  { title:"title3", top_line:"top line 3", id:3 },
  { title:"title4", top_line:"top line 4", id:4 },
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

      <div className="container">
        <aside>
            <NavVertical/>
        </aside>
        <main>
          <section className="blog-posts">
            <Cards isLogin={isLogin}  writings = {writings} />
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
