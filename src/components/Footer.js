
const Footer = ({ darkMode }) => {
    const footerClassNames = darkMode ? "bg-dark text-white" : "bg-light";

    return (
        <footer className={`py-5 ${footerClassNames}`}>
            <div className="container">
                <h2>Company Name</h2>
                <p>&copy; 2023</p>
            </div>
        </footer>
    );
}

export default Footer;