import React, { createContext } from "react";
import { DataMainProvider } from "../type/type";
import { useGetUser } from "../hooks/user";
import { useGetProduct } from "../hooks/product";

export const MainContext = createContext({} as { data?: DataMainProvider });

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const { users } = useGetUser();
  const { products } = useGetProduct();
  console.log(products);
  
  const data: DataMainProvider = {
    products: products ?? [],
    users,
  };
  return (
    <MainContext.Provider value={{ data }}>{children}</MainContext.Provider>
  );
};
