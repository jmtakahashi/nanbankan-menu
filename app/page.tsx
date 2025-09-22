"use client";

import { useState, useEffect } from 'react';

import grill from "../public/grill";
import MenuItem from "@/components/MenuItem";

export default function Grill() {
  const [menuItems, setMenuItems] = useState(grill)

  return (
    <>                
      <h2 id="grill">From the Grill</h2>
      <div id="menuItemsContainer" className="menuItems-container" data-menu="grill">
        {menuItems.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      </div>
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
