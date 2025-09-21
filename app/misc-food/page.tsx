import misc from "../../public/miscFood"
import MenuItem from "@/components/MenuItem";

export default function MiscFood() {
  return (
    <>
      <h2 id="misc">Misc Food</h2>
      {misc.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      <a href="#top" className="backToTopLink">back to top</a>        
    </>
  );
}
