"use client";

import { useState, useEffect } from 'react';

import drinks from "../../public/drinks";
import MenuItem from "@/components/MenuItem";

export default function Drinks() {
  const [menuItems, setMenuItems] = useState(drinks)

  return (
    <>
      <h2 id="drinks">Drinks Menu</h2>
      <div id="menuItemsContainer" className="menuItems-container" data-menu="drinks">
        {menuItems.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      </div>
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
