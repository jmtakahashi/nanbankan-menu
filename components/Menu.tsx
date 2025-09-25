"use client"

import { useState } from "react";
import { MenuProps } from "../types/types";
import { MenuItemType } from "../types/types";

import MenuItem from "@/components/MenuItem";
import FunctionButtons from "@/components/FunctionButtons";


export default function Menu({ menu, menuName, menuTitle }: MenuProps) {
  const INITIAL_STATE = menu
  const [menuItems, setMenuItems] = useState(INITIAL_STATE)
  const [regNumVisibility, setRegNumVisibility] = useState(false)

  const reset = () => {  
    // send regNumVisibility = false to all menu items
    setRegNumVisibility(() => false)

    // reset menu items back to normal order (the original array/initial state)
    setMenuItems(INITIAL_STATE)

  }

  const showAllRegNums = () => {
    // send regNumVisibility = true to all menu items
    setRegNumVisibility(true)
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
      <FunctionButtons funcs={{reset, showAllRegNums, shuffleMenuItems, menuItems}} />
      <div id="menuItemsContainer" className="menuItems-container" data-menu={menuName}>
        {menuItems.map((el: MenuItemType) => <MenuItem key={el.regNum} menuItem={el} visibility={regNumVisibility} />)}
      </div>
      <a href="#" className="backToTopLink">back to top</a>
    </>
  )
}