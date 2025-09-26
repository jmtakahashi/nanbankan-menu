import { useState, useEffect } from "react";
import { MenuItemProps } from "../types/types";
import styles from "../app/layout.module.css";

export default function MenuItem({ menuItem, buttonClickedFlag, setButtonClickedFlag }: MenuItemProps) {
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
    <div className={styles.menuItem_container}>
      <div className={styles.menuItem_list}>
        <h3 className={styles.menuItem_item}>{ menuItem.item }</h3>
        <p className={styles.menuItem_desc}>{ menuItem.desc }</p>
      </div>
      <div className={styles.menuItem_regNumContainer}>
        <span className={`${styles.menuItem_regNum} + ${!isVisible ? styles.blur : null}`} onClick={handleRegNumClick}>{ menuItem.regNum }</span>
      </div>
    </div>
  )
}
