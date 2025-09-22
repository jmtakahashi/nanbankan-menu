"use client";

import { useState, useEffect } from 'react';

import specials from "../../public/specials"
import MenuItem from "@/components/MenuItem";


export default function Home() {
  const [menuItems, setMenuItems] = useState(specials)

  return (
    <>
      <h2 id="specials">Specials</h2>
      <div id="menuItemsContainer" className="menuItems-container" data-menu="specials">
        {menuItems.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      </div>
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
