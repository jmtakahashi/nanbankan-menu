import { useEffect, useState } from "react";
import { MenuItemProps } from "../types/types";

export default function MenuItem({ menuItem, visibility }: MenuItemProps) {
  const [isVisible, setIsVisible] = useState(visibility);

  const handleRegNumClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="menuItem-container">
      <div className="menuItem-list">
        <h3 className="menuItem-item">{ menuItem.item }</h3>
        <p className="menuItem-desc">{ menuItem.desc }</p>
      </div>
      <div className="menuItem-regNumContainer">
        <span className={"menuItem-regNum "  + (!isVisible? "blur" : null)} onClick={handleRegNumClick}>{ menuItem.regNum }</span>
      </div>
    </div>
  )
}
