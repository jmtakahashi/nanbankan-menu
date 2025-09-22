import { MenuItemProps } from "../types/types";

export default function MenuItem({ menuItem }: MenuItemProps) {
  const handleRegNumClick = (e: any): void => {
    e.preventDefault();
    e.target.classList.toggle('blur')
  }

  return (
    <div className="menuItem-container">
      <div className="menuItem-list">
        <h3 className="menuItem-item">{ menuItem.item }</h3>
        <p className="menuItem-desc">{ menuItem.desc }</p>
      </div>
      <div className="menuItem-regNumContainer" data-num={ menuItem.regNum }>
        <span className="menuItem-regNum blur" onClick={handleRegNumClick}>{ menuItem.regNum }</span>
      </div>
    </div>
  )
}
