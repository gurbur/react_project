import './App.css';
import CardExample from './CardExample';
import NavVertical from './NavVerticall';
import NavbarExample from './NavbarExample';

function App() {
  return (
    <div>
      <header>
        <NavbarExample/>
      </header>

      <div className="container">
        <aside>
            <NavVertical/>
        </aside>
        <main>
          <section className="blog-posts">
            <CardExample/>
            <CardExample/>
            <CardExample/>
            <CardExample/>
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
