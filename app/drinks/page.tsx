import drinks from "../../public/drinks";
import MenuItem from "@/components/MenuItem";

  export default function Drinks() {
  return (
    <>
      <h2 id="drinks">Drinks Menu</h2>
      {drinks.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      <a href="#top" className="backToTopLink">back to top</a>   
    </>
  );
}
