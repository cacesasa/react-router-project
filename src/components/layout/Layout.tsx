import { Outlet } from "react-router-dom";
import NavBar from "../nav/nav-bar";
import Footer from "../footer/footer";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}