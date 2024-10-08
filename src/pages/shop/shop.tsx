
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image : string;
}
const ShopPage = () => {
  const carts: CartItem[] = [
    {
      id: 1,
      name: "Product A",
      price: 1000,
      quantity: 10,
      total: 100000,
      image: "img/YamahaU1H.png"
    },
    {
      id: 2,
      name: "Product B",
      price: 350000,
      quantity: 10,
      total: 3500000,
      image: "img/Roland Fantom 8.png"
    },
  ];
  const calculateTotalSum = (): number => {
    return carts.reduce((sum, item) => sum + item.total, 0);
  };

  const totalSum = calculateTotalSum();
  return (
    <>
      <div>
        <div className="container mt-5 card shadow-lg mt-5 mb-5"
        >
          <h1 className="text-center mt-5 mb-5">Giỏ Hàng</h1>
          <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th>Hình Ảnh</th>
                <th>Tên Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody id="cart" className="">
              {carts.map((items) => {
                return (
                  <>
                    <tr>
                      <td>
                        <img src={items.image} height={50} width={50} alt="" />
                      </td>
                      <td>{items.name}</td>
                      <td>{items.price} VND</td>
                      <td>{items.quantity}</td>
                      <td>{items.total}</td>
                      <td>
                        <button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <h2>
            Tổng Tiền: <span id="total">{totalSum}</span> VNĐ
          </h2>
          <button id="checkout" className="buy-btn mt-3 mb-3">
            Thanh Toán
          </button>
        </div>
      </div>
    </>
  );
};
export default ShopPage;