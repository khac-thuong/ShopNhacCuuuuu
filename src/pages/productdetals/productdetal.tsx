import { useContext, useEffect, useState } from "react";
import { useParams} from 'react-router-dom';
import { MainContext } from "../../context/mainprovider";
import { IProduct } from "../../type/type";
const ProductdetalsPage = () => {
  const { data } = useContext(MainContext);

  const { id } = useParams();

  const [detail, setDetail] = useState<IProduct>()

  useEffect(()=> {
    if (!data?.products) return

    const value = data.products.filter((items) => items.id === id)
    
    setDetail(value[0])
  }, [data, id])

  return (
    <div className="container ProductDetals my-5 pt-5">
      <div className="row mt-5 justify-content-between align-items-center">
        <div className="col-12 col-lg-5">
          <img className="img-fluid" src={`../../${detail?.img}`} alt={detail?.name} />
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <h1 className="py-4">{detail?.name}</h1>
          <h2>{detail?.price}</h2>
          <div className="input-group mb-3">
            <input type="number" value={1}/>
            <button className="buy-btn ms-2">Mua</button>
          </div>
          <h4 className="mt-5 mb-5">Mô Tả Sản Phẩm</h4>
          <p>
            {detail?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductdetalsPage;
