"use client";

import { useState } from 'react';

import misc from "../../public/miscFood"
import MenuItem from "@/components/MenuItem";
import FunctionButtons from "@/components/FunctionButtons";


export default function MiscFood() {
  const [menuItems, setMenuItems] = useState(misc)

  const hideAllRegNums = (e: any) => {
    e.preventDefault();

    // reset menu items back to normal order
    setMenuItems(misc)
  }

  const showAllRegNums = (e: any) => {
    e.preventDefault();
  }

  const shuffleMenuItems = () => {
    const shuffledMenuItems = [...menuItems]
    shuffle(shuffledMenuItems)
    setMenuItems(shuffledMenuItems)
  }

  /* https://stackoverflow.com/a/2450976 */
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
    <>
      <h2 id="misc">Misc Food</h2>
      <FunctionButtons funcs={{hideAllRegNums, showAllRegNums, shuffleMenuItems}} />
      <div id="menuItemsContainer" className="menuItems-container" data-menu="miscFood">
        {menuItems.map(e => <MenuItem key={e.regNum} menuItem={e}  visibility={false} />)}
      </div>
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
