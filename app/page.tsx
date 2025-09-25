"use client";

import { useState } from "react";

import grill from "../public/grill";
import MenuItem from "@/components/MenuItem";
import FunctionButtons from "@/components/FunctionButtons";

export default function Grill() {
  const [menuItems, setMenuItems] = useState(grill)
  const [regNumVisibility, setRegNumVisibility] = useState(false)

  const hideAllRegNums = (e: any) => {
    e.preventDefault();

    // reset menu items back to normal order (the original array)
    setMenuItems(grill)
    
    // send regNumVisibility = false to all menu items
    setRegNumVisibility(false)
  }

  const showAllRegNums = (e: any) => {
    e.preventDefault();

    // send regNumVisibility = true to all menu items
    setRegNumVisibility(true)
  }

  const shuffleMenuItems = () => {
    setRegNumVisibility(false)

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
      <h2 id="grill">From the Grill</h2>
      <FunctionButtons funcs={{hideAllRegNums, showAllRegNums, shuffleMenuItems}} />
      <div id="menuItemsContainer" className="menuItems-container" data-menu="grill">
        {menuItems.map(e => <MenuItem key={e.regNum} menuItem={e} visibility={regNumVisibility} />)}
      </div>
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  )
}
