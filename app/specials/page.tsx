import specials from "../../public/specials"
import Menu from "@/components/Menu";

export default function Page() {
  return (
    <Menu menu={specials} menuName="specials" menuTitle="Specials" />
  )
}
