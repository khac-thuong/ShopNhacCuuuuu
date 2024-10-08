export interface IProduct {
  id: string;
  pro_id: string;
  name: string;
  type: string;
  price: string;
  quantity: number;
  desc: string;
  img: string;
}

export type DataMainProvider = {
  products: IProduct[];
  users: IUsers[];
};

export interface IUsers {
  id: string;
  user_id: string;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
};
