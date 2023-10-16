import NavigationBar from "./NavigationBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, description, children, darkMode }) => {
    return (
        <div className="page-container">
            <NavigationBar
                title={"React E-Commerce Web"}
            />
            <Header
                title={title}
                description={description}
                darkMode={darkMode}
            />
            {children}
            <Footer darkMode={darkMode} />
        </div>
    )
}

export default Layout;