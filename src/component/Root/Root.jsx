import {Outlet, useNavigation} from "react-router-dom"
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="m-0 min-h-screen">
            <Navbar></Navbar>
            <div className="h-[71px]"></div>
            {/* {
                navigation.state === "loading" ? <div className="min-h-screen text-9xl items-center justify-center flex"><span className="loading loading-spinner loading-lg"></span></div>:
                <Outlet></Outlet>
            } */}
         <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;