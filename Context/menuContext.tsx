// context/MenuContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export type MenuItem = {
  id: string;
  dishname: string;
  description: string;
  course: string;
  price: number;
};

type MenuContextType = {
  menuItems: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    setMenuItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};
