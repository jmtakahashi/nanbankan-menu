import { FunctionButtonsProps } from "@/types/types"

export default function FunctionButtons({ funcs }: FunctionButtonsProps) {
  return (
    <div className="buttons">
      <button id="resetAll" className="button" onClick={funcs.hideAllRegNums}>Reset All</button>
      <button id="showAll" className="button" onClick={funcs.showAllRegNums}>Show All</button>
      <button id="shuffle" className="button" onClick={funcs.shuffleMenuItems}>Shuffle</button>
    </div>
  )
}