type MenuItem = {
  regNum: number,
  item: string,
  desc: string
}

export default function MenuItem({ menuItem } ) {
  return (
    <div className="menuItem-container">
      <div className="menuItem-list">
        <h3 className="menuItem-item">{ menuItem.item }</h3>
        <p className="menuItem-desc">{ menuItem.desc }</p>
      </div>
      <div className="menuItem-regNum">
        { menuItem.regNum }
      </div>
    </div>
  )
}
