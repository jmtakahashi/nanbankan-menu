"use client"

import { useState } from "react";
import { MenuProps } from "../types/types";
import { MenuItemType } from "../types/types";
import MenuItem from "@/components/MenuItem";

export default function Menu({ menu, menuName, menuTitle }: MenuProps) {
  const [menuItems, setMenuItems] = useState(menu)
  const [regNumVisibility, setRegNumVisibility] = useState(false)

  const reset = () => {  
    setMenuItems(menu)
  }

  const showAllRegNums = () => {
  }

  const shuffleMenuItems = (items: MenuItemType[]) => {
    const shuffledMenuItems = [...items]
    shuffle(shuffledMenuItems)
    setMenuItems(shuffledMenuItems)
  }

  /* https://stackoverflow.com/a/2450976 */
  const shuffle = (array: MenuItemType[]) => {
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
      <h2 id={menuName}>{menuTitle}</h2>
      <div className="buttons">
        <button id="resetAll" className="button" onClick={reset}>Reset All</button>
        <button id="showAll" className="button" onClick={showAllRegNums}>Show All</button>
        <button id="shuffle" className="button" onClick={() => shuffleMenuItems(menuItems)}>Shuffle</button>
      </div>
      <div id="menuItemsContainer" className="menuItems-container" data-menu={menuName}>
        {menuItems.map((el: MenuItemType) => <MenuItem key={el.regNum} menuItem={el} visibility={regNumVisibility} />)}
      </div>
      <a href="#" className="backToTopLink">back to top</a>
    </>
  )
}