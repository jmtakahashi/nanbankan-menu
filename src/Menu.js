import { useState, useEffect } from "react";
import grill from './itemData/grill';
import kitchen from './itemData/kitchen';
import specials from './itemData/specials';
import misc from './itemData/miscFood';
import drinks from './itemData/drinks';
import MenuItem from "./MenuItem";

export default function Menu({ menu }) {
  const [menuName, setMenuName] = useState(menu[0]?.menu || "menu")
  const [menuTitle, setMenuTitle] = useState(menu[0]?.menuTitle || "Menu")
  const [menuItems, setMenuItems] = useState([])
  const [buttonClickedFlag, setButtonClickedFlag] = useState("")


  useEffect(() => { 
    setMenuItems(
      menu === "grill" ? grill :
      menu === "kitchen" ? kitchen :
      menu === "specials" ? specials :
      menu === "misc" ? misc :
      menu === "drinks" ? drinks :
      []
    )
  }, [menu])

  const reset = () => {  
    setMenuItems(menu)
    setButtonClickedFlag("reset")
  }

  const showAllRegNums = () => {
    setButtonClickedFlag("showAll")
  }

  const shuffleMenuItems = (items) => {
    const shuffledMenuItems = [...items]
    shuffle(shuffledMenuItems)
    setMenuItems(shuffledMenuItems)
  }

  /* https://stackoverflow.com/a/2450976 */
  const shuffle = (array) => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

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
      <div id="menuItemsContainer" className="menuItems_container" data-menu={menuName}>
        {menuItems.map((item) => <MenuItem key={item.regNum} menuItem={item} buttonClickedFlag={buttonClickedFlag} setButtonClickedFlag={setButtonClickedFlag} />)}
      </div>
      <button className="backToTopLink">back to top</button>
    </>
  )
}