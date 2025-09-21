import styles from "./page.module.css";
import grill from "../public/grill";
import kitchen from "../public/kitchen"
import specials from "../public/specials"
import misc from "../public/miscFood"
import drinks from "../public/drinks";
import MenuItem from "@/components/MenuItem";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 id="top">Nanbankan Menu</h1>

        <ul className="links">
          <li className="linkItem"><a href="#grill">Grill</a></li>
          <li className="linkItem"><a href="#kitchen">Kitchen</a></li>
          <li className="linkItem"><a href="#specials">Specials</a></li>
          <li className="linkItem"><a href="#misc">Misc</a></li>
          <li className="linkItem"><a href="#drinks">Drinks</a></li>
        </ul>
                
        <h2 id="grill">From the Grill</h2>
        {grill.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
        <a href="#top" className="backToTopLink">back to top</a>

        <h2 id="kitchen">From the Kitchen</h2>
        {kitchen.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
        <a href="#top" className="backToTopLink">back to top</a>

        <h2 id="specials">Specials</h2>
        {specials.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
        <a href="#top" className="backToTopLink">back to top</a>

        <h2 id="misc">Misc Food</h2>
        {misc.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
        <a href="#top" className="backToTopLink">back to top</a>

        <h2 id="drinks">Drinks Menu</h2>
        {drinks.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
        <a href="#top" className="backToTopLink">back to top</a>
        
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
