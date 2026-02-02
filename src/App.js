import { useState } from 'react';
import Menu from './Menu';
import './App.css';

function App() {
  const [menu, setMenu] = useState("grill");

  return (
    <div id="top" className="page">
      <header className="header">
        <h1 className="pageTitle">Nanbankan Menu Trainer</h1>

        <ul className="links">
          <li className="linkItem"><button onClick={() => setMenu("grill")}>Grill</button></li>
          <li className="linkItem"><button onClick={() => setMenu("kitchen")}>Kitchen</button></li>
          <li className="linkItem"><button onClick={() => setMenu("specials")}>Specials</button></li>
          <li className="linkItem"><button onClick={() => setMenu("misc")}>Misc</button></li>
          <li className="linkItem"><button onClick={() => setMenu("drinks")}>Drinks</button></li>
        </ul>
      </header>
        
      <main className="main">
        <Menu menu={menu} />
      </main>
    
      <footer className="footer">Built with ❤️ by <a href="https://whoisjaytee.com" target="_blank" rel="noreferrer">Jaytee</a></footer>
    </div>
  );
}

export default App;
