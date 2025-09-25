export type MenuItemProps = {
  menuItem: {
    regNum: number;
    item: string;
    desc: string;
  },
  visibility: boolean;
} 

export type FunctionButtonsProps = {
  funcs: {
    hideAllRegNums: (e: any) => void;
    showAllRegNums: (e: any) => void;
    shuffleMenuItems: (menuItems: any) => void
  }
}