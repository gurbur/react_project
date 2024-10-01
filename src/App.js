import './App.css';
import { input } from 'react-bootstrap'

function App() {
  return (
    <page>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand" href="#">Hidden brand</a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <div class="d-grid gap-2 d-md-block">
                <button type="button" class="btn btn-dark">Dark</button>
                <button type="button" class="btn btn-dark">Dark</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>

      </main>
      <aside>

      </aside>
      <footer>
        
      </footer>
    </page>
  );
}

export default App;
