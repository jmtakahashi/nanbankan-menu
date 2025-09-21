import kitchen from "../../public/kitchen"
import MenuItem from "@/components/MenuItem";

export default function Kitchen() {
  return (
    <>
      <h2 id="kitchen">From the Kitchen</h2>
      {kitchen.map(e => <MenuItem key={e.regNum} menuItem={e} />)}
      <a href="#top" className="backToTopLink">back to top</a>
    </>
  );
}
