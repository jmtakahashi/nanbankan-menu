import { useState, useEffect } from "react";
import grill from './itemData/grill';
import kitchen from './itemData/kitchen';
import specials from './itemData/specials';
import misc from './itemData/miscFood';
import drinks from './itemData/drinks';
import MenuItem from "./MenuItem";

export default function Menu({ menu }) {
  const [menuItems, setMenuItems] = useState([]);
  const [buttonClickedFlag, setButtonClickedFlag] = useState("")

  const menuName = menu.charAt(0).toUpperCase() + menu.slice(1);

  // based on the menu prop, we derive the menu items to show
  const menuItemsFromMenu = (menu) => {
    return menu === 'grill'
      ? grill
      : menu === 'kitchen'
        ? kitchen
        : menu === 'specials'
          ? specials
          : menu === 'misc'
            ? misc
            : menu === 'drinks'
              ? drinks
              : [];
  }

  
  useEffect(() => { 
    setMenuItems(() => menuItemsFromMenu(menu));
  }, [menu])

  const handleReset = () => {  
    setMenuItems(() => menuItemsFromMenu(menu));
    setButtonClickedFlag("resetAll")
  }

  const handleShowAllRegNums = () => {
    setButtonClickedFlag("hideAll")
  }

  const handleShuffleMenuItems = (items) => {
    const shuffledMenuItems = [...items]
    shuffle(shuffledMenuItems)
    setMenuItems(shuffledMenuItems)
  }

  // https://stackoverflow.com/a/2450976
  // shuffles array in place
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
      <h2>{menuName}</h2>

      <div className='buttons'>
        <button className='button' onClick={handleReset}>
          Reset All
        </button>
        <button className='button' onClick={handleShowAllRegNums}>
          Hide All
        </button>
        <button
          className='button'
          onClick={() => handleShuffleMenuItems(menuItems)}
        >
          Shuffle
        </button>
      </div>

      <div
        className='menuItems_container'
        data-menu={menu}
      >
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.regNum}
            menuItem={menuItem}
            buttonClickedFlag={buttonClickedFlag}
            setButtonClickedFlag={setButtonClickedFlag}
          />
        ))}
      </div>
    </>
  );
}