import { useState, useRef } from 'react';
import Menu from './Menu';
import './App.css';

function App() {
  const [menu, setMenu] = useState("grill");
  const mainContainerRef = useRef(null);

  return (
    <div className="page" ref={mainContainerRef}>
      <header className="header">
        <h1 className="pageTitle">Nanbankan Menu Trainer</h1>

        <ul className="links">
          <li className="linkItem"><button className="button" onClick={() => setMenu("grill")}>Grill</button></li>
          <li className="linkItem"><button className="button" onClick={() => setMenu("kitchen")}>Kitchen</button></li>
          <li className="linkItem"><button className="button" onClick={() => setMenu("specials")}>Specials</button></li>
          <li className="linkItem"><button className="button" onClick={() => setMenu("misc")}>Misc</button></li>
          <li className="linkItem"><button className="button" onClick={() => setMenu("drinks")}>Drinks</button></li>
        </ul>
      </header>
        
      <main className="main">
        <Menu menu={menu} mainContainerRef={mainContainerRef.current} />
      </main>
    
      <footer className="footer">Built with ❤️ by <a href="https://whoisjaytee.com" target="_blank" rel="noreferrer">Jaytee</a></footer>
    </div>
  );
}

export default App;
