"use client"

import { useState } from "react";
import { MenuProps } from "../types/types";
import { MenuItemType } from "../types/types";
import styles from "../app/layout.module.css";
import MenuItem from "@/components/MenuItem";

export default function Menu({ menu, menuName, menuTitle }: MenuProps) {
  const [menuItems, setMenuItems] = useState(menu)
  const [buttonClickedFlag, setButtonClickedFlag] = useState("")

  const reset = () => {  
    setMenuItems(menu)
    setButtonClickedFlag("reset")
  }

  const showAllRegNums = () => {
    setButtonClickedFlag("showAll")
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
      <div className={styles.buttons}>
        <button id="resetAll" className={styles.button} onClick={reset}>Reset All</button>
        <button id="showAll" className={styles.button} onClick={showAllRegNums}>Show All</button>
        <button id="shuffle" className={styles.button} onClick={() => shuffleMenuItems(menuItems)}>Shuffle</button>
      </div>
      <div id="menuItemsContainer" className={styles.menuItems_container} data-menu={menuName}>
        {menuItems.map((el: MenuItemType) => <MenuItem key={el.regNum} menuItem={el} buttonClickedFlag={buttonClickedFlag} setButtonClickedFlag={setButtonClickedFlag} />)}
      </div>
      <a href="#" className={styles.backToTopLink}>back to top</a>
    </>
  )
}