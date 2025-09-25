import { FunctionButtonsProps } from "@/types/types"

export default function FunctionButtons({ funcs: { reset, showAllRegNums, shuffleMenuItems } }: FunctionButtonsProps) {
  return (
    <div className="buttons">
      <button id="resetAll" className="button" onClick={reset}>Reset All</button>
      <button id="showAll" className="button" onClick={showAllRegNums}>Show All</button>
      <button id="shuffle" className="button" onClick={shuffleMenuItems}>Shuffle</button>
    </div>
  )
}