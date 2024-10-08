import { Outlet } from "react-router-dom"
import Header from "../../components/user/header"
import Footer from "../../components/user/footer"

const LayoutUser = () => {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}
export default LayoutUser