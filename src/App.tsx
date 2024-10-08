import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutUser from "./layouts/user/layout"
import HomePage from "./pages/home/home"
import ProductPage from "./pages/product/product"
import ProductdetalsPage from "./pages/productdetals/productdetal"
import LayoutAdmin from "./layouts/admin/layout"
import AdminDashboard from "./pages/admin/dashboard/dashboard"
import Authen from "./pages/authen/authen"
import About from "./about/about"
import AdminProfile from "./pages/admin/profile/profile"
import AdminUser from "./pages/admin/user/user"
import AdminProduct from "./pages/admin/product/product"
import Introduce from "./pages/introduce/introduce"
import ShopPage from "./pages/shop/shop"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutUser/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="product" element={<ProductPage/>}/>
            <Route path="product/:id" element={<ProductdetalsPage/>}/>
            <Route path="authen" element={<Authen/>}/>
            <Route path="shop" element={<ShopPage/>}/>
            <Route path="introduce" element={<Introduce/>}/>
            <Route path="about" element={<About/>}/>
          </Route>
          <Route element={<LayoutAdmin/>}>
            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route path="/admin/profile" element={<AdminProfile/>}/>
            <Route path="/admin/user" element={<AdminUser/>}/>
            <Route path="/admin/product" element={<AdminProduct />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
