import drinks from "../../public/drinks"
import Menu from "@/components/Menu";

export default function Page() {
  return (
    <Menu menu={drinks} menuName="drinks" menuTitle="Drinks" />
  )
}