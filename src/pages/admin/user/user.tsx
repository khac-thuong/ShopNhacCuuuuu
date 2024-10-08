import { useEffect, useState } from "react";
import { Modal, Table, notification } from "antd"; 
import FormUser from './_components/form-user';
import { collection, getDocs, orderBy, query, deleteDoc, doc } from "firebase/firestore"; 
import { firestoreDB } from "../../../firebase-config"; 
import { IUsers } from "../../../type/type";

type DataSource = {
  key: number;
  id: string;
  user_id: string;  
  username: string;
  email: string;
  fullname: string;
  password: string;
};

const AdminUser = () => {
  const [dataSource, setDataSource] = useState<DataSource[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setID] = useState<string>();

  const columns = (
    deleteUser: (id: string) => void
  ) => [
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
  
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_: DataSource, record: DataSource) => (
        <div className="text-center">
          <button className="btn btn-primary me-3" type="button" onClick={() => {
            setIsModalOpen(true)
            setID(record.id)
            }}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => deleteUser(record.id)} 
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];
  const fetchUsersFromFirestore = async () => {
    try {
      const q = query(collection(firestoreDB, "users"), orderBy("user_id"));
      const querySnapshot = await getDocs(q);
      const fetchedUsers = querySnapshot.docs.map((doc) => {
        const data = doc.data() as IUsers;
        return {
          ...data,
          id: doc.id,
        };
      });

      const datasource: DataSource[] = fetchedUsers.map((items, index) => {
        const firstname = items?.name?.firstname ?? 'FirstName not available';
        const lastname = items?.name?.lastname ?? 'LastName not available';
        
        return {
          key: index + 1,
          id: items.id,  
          user_id: items.user_id, 
          username: items.username,
          email: items.email,
          fullname: `${firstname} ${lastname}`,
          password: items.password,
        };
      });
      setDataSource(datasource);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  const deleteUser = async (id: string) => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc chắn muốn xóa người dùng này?",
      onOk: async () => {
        try {
          await deleteDoc(doc(firestoreDB, "users", id)); 
          setDataSource((prevData) => prevData.filter((user) => user.id !== id)); 
          notification.success({
            message: "Thành công!",
            description: "Người dùng đã được xóa thành công.",
          });
        } catch (error) {
          console.error("Error deleting user: ", error);
        }
      },
    });
  };

  useEffect(() => {
    fetchUsersFromFirestore();
  }, []);

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns(deleteUser)} 
        bordered
        title={() => (
          <>
            <div className="hstack gap-3">
              <div>
                <h3 className="fw-bold">List User</h3>
              </div>
              <div className="ms-auto">
                <button
                  className="btn btn-lg btn-outline-primary"
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                >
                  <i className="fa-solid fa-plus"></i> Create New User
                </button>
                <Modal
                  title={
                    <>
                      <h2 className="fw-bold">Create New User</h2>
                    </>
                  }
                  open={isModalOpen}
                  footer={false}
                  onOk={() => setIsModalOpen(false)}
                  onCancel={() => setIsModalOpen(false)}
                  width={1000}
                >
                  <FormUser id={id ?? ""}/>
                </Modal>
              </div>
            </div>
          </>
        )}
      />
    </>
  );
};

export default AdminUser;
