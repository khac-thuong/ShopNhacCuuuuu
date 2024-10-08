import React, { useState, FormEvent, useEffect } from "react";
import { collection, addDoc, getDocs, getDoc, doc, setDoc, } from "firebase/firestore";
import { IUsers } from "../../../../type/type";
import { db } from "../../../../firebase-config";
type Input = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  id: string;
  user_id: string;
};
const defaultValue: Input = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  id: "",
  user_id: "",
};
const FormUser = ({ id }: { id: string }) => {

  const [userId, setUserId] = useState<string>("");
  const [formData, setFormData] = useState<Input>(defaultValue);
  const [message, setMessage] = useState<string | null>(null);

  const fetchUserId = async () => {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map((doc) => doc.data() as IUsers);

    const existingIds = usersList
      .map((user) => parseInt(user.user_id))
      .filter((id) => !isNaN(id));
    const nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
    setUserId(nextId.toString());
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id: userID, ...data } = formData;

    const newUser = {
      user_id: userId,
      username: data.username,
      name: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      email: data.email,
      password: data.password,
    };

    if (userID === "") {
      try {
        await addDoc(collection(db, "users"), newUser);
        setMessage("Người dùng đã được thêm thành công");
        setFormData(defaultValue);
        fetchUserId();
      } catch (error) {
        setMessage("Lỗi khi thêm người dùng!");
        console.error("Error adding user: ", error);
      }
    } else {
      try {
        await setDoc(doc(db, "users", userID), newUser);
        setMessage("Đã Cập Nhật Người Dùng Thành Công");
        setFormData(defaultValue);
      } catch (error) {
        setMessage("Lỗi Khi Cập Nhật!");
        console.error("Error updating user: ", error);
      }
    }
  };

  useEffect(() => {
    if (!id) return;
    if (id !== "0") {
      getDoc(doc(collection(db, "users"), id)).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as IUsers;
          data.id = snapshot.id;

          const valueInput: Input = {
            username: data.username,
            firstname: data.name.firstname,
            lastname: data.name.lastname,
            email: data.email,
            password: data.password,
            id: data.id,
            user_id: data.user_id,
          };
          
          setFormData(valueInput);
        } else 
        setFormData(defaultValue);
      });
    }
  }, [id]);

  return (
    <div className="container">
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row row-cols-1 row-cols-md-2 gy-3">
          <div className="col">
            <label htmlFor="username" className="form-label">
              Username *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col">
            <label htmlFor="firstname" className="form-label">
              Firstname *
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="form-control"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col">
            <label htmlFor="lastname" className="form-label">
              Lastname *
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="form-control"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col">
            <label htmlFor="password" className="form-label">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-dark btn-lg w-100">
            Ok
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
