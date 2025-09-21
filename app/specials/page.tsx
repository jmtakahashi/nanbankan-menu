import specials from "../../public/specials"
import MenuItem from "@/components/MenuItem";

export default function Home() {
  return (
    <>
      <h2 id="specials">Specials</h2>
      {specials.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
