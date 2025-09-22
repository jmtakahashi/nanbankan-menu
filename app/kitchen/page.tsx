"use client";

import { useState, useEffect } from 'react';

import kitchen from "../../public/kitchen"
import MenuItem from "@/components/MenuItem";


export default function Kitchen() {
  const [menuItems, setMenuItems] = useState(kitchen)
  
  return (
    <>
      <h2 id="kitchen">From the Kitchen</h2>
      <div id="menuItemsContainer" className="menuItems-container" data-menu="kitchen">
        {menuItems.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      </div>
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
