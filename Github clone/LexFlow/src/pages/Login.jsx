import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Welcome back</h1>
                <p>Secure law firm onboarding in one place.</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </label>
                    <button type="submit" className="primary-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
