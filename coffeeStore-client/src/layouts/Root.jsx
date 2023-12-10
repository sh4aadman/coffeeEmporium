import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import FooterDetails from "../components/Shared/Footer/FooterDetails";
import Footer from "../components/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterDetails></FooterDetails>
            <Footer></Footer>
        </div>
    );
};

export default Root;