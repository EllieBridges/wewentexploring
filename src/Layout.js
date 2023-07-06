import Backdrop from "./Backdrop";
import NavBar from "./NavBar";

export default function Layout({children}){
    return(
        <div className = 'layoutContainer'>
        <Backdrop>
        <NavBar />
        </Backdrop>
        <main>{children}</main>
        </div>
    )
}