"use client";

import { useState, useEffect } from 'react';

import misc from "../../public/miscFood"
import MenuItem from "@/components/MenuItem";


export default function MiscFood() {
  const [menuItems, setMenuItems] = useState(misc)

  return (
    <>
      <h2 id="misc">Misc Food</h2>
      <div id="menuItemsContainer" className="menuItems-container" data-menu="miscFood">
        {menuItems.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      </div>
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
