import grill from "../public/grill";
import Menu from "@/components/Menu";

export default function Page() {
  return (
    <Menu menu={grill} menuName="grill" menuTitle="From the Grill" />
  )
}
