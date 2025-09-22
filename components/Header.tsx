"use client";

import Link from "next/link";
import styles from "../app/page.module.css";

export default function Header() {

  const resetAll = (e: any) => {
    e.preventDefault();
    
      // for (let el of regNums) {
      //   el.classList.add('blur')
      // };
    }

  const showAll = (e: any) => {
    e.preventDefault();

    // for (let el of regNums) {
    //   el.classList.remove('blur')
    // };
  }

  // https://stackoverflow.com/a/2450976
  const shuffle = (array: any) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  return (
    <header  className={styles.header}>
      <h1 id="top" className={styles.pageTitle}>Nanbankan Menu Trainer</h1>

      <ul className="links">
        <li className="linkItem"><Link href="/">Grill </Link></li>
        <li className="linkItem"><Link href="/kitchen">Kitchen </Link></li>
        <li className="linkItem"><Link href="/specials">Specials </Link></li>
        <li className="linkItem"><Link href="/misc-food">Misc </Link></li>
        <li className="linkItem"><Link href="/drinks">Drinks </Link></li>
      </ul>
      
      <div className="buttons">
        <button id="resetAll" className="button" onClick={resetAll}>Reset All</button>
        <button id="showAll" className="button" onClick={showAll}>Show All</button>
        <button id="shuffle" className="button" onClick={shuffle}>Shuffle</button>
      </div>
    </header>
  )
}