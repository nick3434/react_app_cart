const Header = ({ title, description, darkMode = false }) => {
    // 這裡的 darkMode 是一個布林值，預設值為 false

    // 如果 darkMode 為 true，則 headerClassNames 的值為 "bg-dark text-white"
    // 否則，則 headerClassNames 的值為 "bg-light"
    const headerClassNames = darkMode ? "bg-dark text-white" : "bg-light";
    return (
        <header className={`${headerClassNames} py-5`}>
            <div className="container">
                <h1 className="text-primary">
                    {title}
                </h1>
                <p>
                    {description}
                </p>
            </div>
        </header>
    );
}

export default Header;