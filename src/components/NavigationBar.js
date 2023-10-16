import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../api/firebaseAPI';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

// 建立一個NavigationBar元件
const NavigationBar = ({ title }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        // 這裡的流程只會在第一次元件渲染時執行
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // 如果有登入
                console.log("user", user);
                setIsLogin(true);
                setUser(user);
            } else {
                // 如果沒有登入
                setIsLogin(false);
                setUser({});
            }
        });
    }, []);

    const signOutHandler = () => {
        signOut(auth)
            .then(() => alert("登出成功"))
            .catch((err) => alert(`登出失敗: ${err}`))
    };

    let userControlGroup = (
        <div class="d-inline-block">
            <NavLink className="nav-link d-inline-block" to="/login">Login</NavLink>
            <NavLink className="nav-link d-inline-block" to="/sign-up">Sign Up</NavLink>
        </div>
    )
    if (isLogin) {
        userControlGroup = (
            <div class="d-inline-block">
                <a className="nav-link d-inline-block">{user.email}</a>
                <a className="nav-link d-inline-block" onClick={signOutHandler}>Sign Out</a>
            </div>
        )
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        {userControlGroup}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// 匯出元件
export default NavigationBar;