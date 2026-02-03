import { useState, useRef } from 'react';
import Menu from './Menu';
import './App.css';

function App() {
  const [menu, setMenu] = useState("grill");
  const ref = useRef(null);

  return (
    <div className='page' ref={ref}>
      <header className='header'>
        <h1 className='pageTitle'>Nanbankan Menu Trainer</h1>

        <ul className='links'>
          <li className='linkItem'>
            <button className='link' onClick={() => setMenu('grill')}>
              Grill
            </button>
          </li>
          <li className='linkItem'>
            <button className='link' onClick={() => setMenu('kitchen')}>
              Kitchen
            </button>
          </li>
          <li className='linkItem'>
            <button className='link' onClick={() => setMenu('specials')}>
              Specials
            </button>
          </li>
          <li className='linkItem'>
            <button className='link' onClick={() => setMenu('misc')}>
              Misc
            </button>
          </li>
          <li className='linkItem'>
            <button className='link' onClick={() => setMenu('drinks')}>
              Drinks
            </button>
          </li>
        </ul>
      </header>

      <main className='main'>
        <Menu menu={menu} />
      </main>

      <footer className='footer'>
        <div
          className='button backToTopButton'
          onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className='backToTopText'>^</span>
        </div>
        <span>
          Built with ❤️ by{' '}
          <a href='https://whoisjaytee.com' target='_blank' rel='noreferrer'>
            Jaytee
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
