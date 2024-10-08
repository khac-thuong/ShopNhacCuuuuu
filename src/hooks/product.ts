import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { firestoreDB } from "../firebase-config";
import { IProduct } from "../type/type";

export const useGetProduct = () => {
  const key: string = "products"
  const [products, setProducts] = useState<IProduct[]>();

  useQuery({
    queryKey: [key],
    queryFn: () => {
      const q = query(collection(firestoreDB, key), orderBy("pro_id"));
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const item = doc.data() as IProduct;
          item.id = doc.id;
          return item;
        });
        console.log(data);
        
        setProducts(data);
        return data;
      });
    },
    staleTime: Infinity,
  });

  return { products: products ?? [] };
};
