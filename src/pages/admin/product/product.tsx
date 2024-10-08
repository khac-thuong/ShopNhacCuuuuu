import { useContext, useState } from "react";
import { Modal, Table } from "antd";
import FromProduct from "./_components/product";
import { MainContext } from "../../../context/mainprovider";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Username",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Desc",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <div className="text-center">
        <button className="btn btn-primary me-3" type="button">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="btn btn-danger" type="button">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    ),
  },
];

const AdminProduct = () => {
  const { data } = useContext(MainContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Table
        dataSource={data?.products}
        columns={columns}
        bordered
        title={() => (
          <>
            <div className="hstack gap-3">
              <div>
                <h3 className="fw-bold">List Products</h3>
              </div>
              <div className="ms-auto">
                <button
                  className="btn btn-lg btn-outline-primary"
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                >
                  <i className="fa-solid fa-plus"></i> Create New product
                </button>
                <Modal
                  title={
                    <>
                      <h2 className="fw-bold">Create New product</h2>
                    </>
                  }
                  open={isModalOpen}
                  footer={false}
                  onOk={() => setIsModalOpen(false)}
                  onCancel={() => setIsModalOpen(false)}
                  width={1000}
                >
                  <FromProduct/>
                </Modal>
              </div>
            </div>
          </>
        )}
      />
    </>
  );
};

export default AdminProduct;