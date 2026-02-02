import { useState, useEffect } from "react";

export default function MenuItem({ menuItem, buttonClickedFlag, setButtonClickedFlag }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (buttonClickedFlag === "reset") {
      setIsVisible(false)
    } else if (buttonClickedFlag === "showAll") {
      setIsVisible(true)
    }
  }, [buttonClickedFlag])

  const handleRegNumClick = () => {
    setIsVisible(!isVisible);
    setButtonClickedFlag("")
  }

  return (
    <div className="menuItem_container">
      <div className="menuItem_list">
        <h3 className="menuItem_item">{ menuItem.item }</h3>
        <p className="menuItem_desc">{ menuItem.desc }</p>
      </div>
      <div className="menuItem_regNumContainer">
        <span className={`menuItem_regNum + ${!isVisible ? "blur" : null}`} onClick={handleRegNumClick}>{ menuItem.regNum }</span>
      </div>
    </div>
  )
}
