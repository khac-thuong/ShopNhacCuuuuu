import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { firestoreDB } from "../firebase-config";
import { IUsers } from "../type/type";

export const useGetUser = () => {
  const key: string = "users";
  const [users, setUsers] = useState<IUsers[]>(); 

  useQuery({
    queryKey: [key],
    queryFn: async () => {
      const q = query(collection(firestoreDB, key), orderBy("user_id"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        const item = doc.data() as IUsers;
        item.id = doc.id; 
        return item;
      });
      console.log(data);

      setUsers(data); 
    },
    staleTime: Infinity,
  });

  return { users: users ?? [] }; 
};
