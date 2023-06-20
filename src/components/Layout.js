import Nav from "./nav";
import Footer from "./footer";
import Heading from "./heading";


const Layout = ({ children }) => {
    return (
        <div>
        <Nav />
        <Heading />
        { children }
        <Footer />
        </div>
    );
}
 
export default Layout;