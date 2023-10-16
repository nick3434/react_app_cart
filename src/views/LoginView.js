import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "../api/firebaseAPI"
import Layout from "../components/Layout"

const LoginView = () => {
    // const [狀態, 設定狀態的函數] = useState(狀態初始值)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                console.log("註冊失敗", err);
                alert("註冊失敗");
            });
    }

    return (
        <Layout title="登入" description="填寫Email與密碼登入會員">
            <section className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={formSubmitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="signUpEmail">Email: </label>
                                    <input onChange={e => setEmail(e.target.value)} type="email" id="signUpEmail" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signUpPassword">Password: </label>
                                    <input onChange={e => setPassword(e.target.value)} minLength={8} type="password" id="signUpPassword" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default LoginView