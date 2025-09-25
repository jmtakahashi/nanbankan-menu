import { useState } from "react";
import { MenuItemProps } from "../types/types";
import styles from "../app/layout.module.css";

export default function MenuItem({ menuItem, visibility }: MenuItemProps) {
  const [isVisible, setIsVisible] = useState(visibility);

  const handleRegNumClick = () => {
    setIsVisible(!isVisible);
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
