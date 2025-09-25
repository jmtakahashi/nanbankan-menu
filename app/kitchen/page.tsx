import kitchen from "../../public/kitchen"
import Menu from "@/components/Menu";

export default function Page() {
  return (
    <Menu menu={kitchen} menuName="kitchen" menuTitle="From the Kitchen" />
  )
}