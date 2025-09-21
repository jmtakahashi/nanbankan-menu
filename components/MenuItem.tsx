import { MenuItemProps } from "../types/types";

export default function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <div className="menuItem-container">
      <div className="menuItem-list">
        <h3 className="menuItem-item">{ menuItem.item }</h3>
        <p className="menuItem-desc">{ menuItem.desc }</p>
      </div>
      <div className="menuItem-regNum blur" data-num={ menuItem.regNum }>
        { menuItem.regNum }
      </div>
    </div>
  )
}
