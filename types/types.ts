export type MenuProps = {
  menu: MenuItemType[];
  menuName: string;
  menuTitle: string;
}

export type MenuItemType = {
  regNum: number,
  item: string,
  desc: string
}

export type MenuItemProps = {
  menuItem: {
    regNum: number;
    item: string;
    desc: string;
  },
  visibility: boolean;
}