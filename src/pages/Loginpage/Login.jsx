import { useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    function SignIn(){
        navigate("/register")
    }
    function handleSubmit(e) {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if any account exists
    if (!storedUser) {
        alert("Please create an account first.");
        return;
    }

    // Validate credentials
    if (
        email === storedUser.officialEmail &&
        password === storedUser.password
    ) {
        alert("Login Successful!");
        navigate("/dashboard");
    } else {
        alert("Invalid Email or Password!");
    }
}

    return (

        <div className="login-page">

            {/* LEFT PANEL */}

            <div className="left-panel">

                <div className="left-content">

                    <h1>PROJEX</h1>

                    <h2>
                        Manage Projects.
                        <br />
                        Deliver Faster.
                    </h2>

                    <p>
                        A centralized platform to manage projects,
                        assign tasks, collaborate with teams,
                        track bugs and monitor project progress.
                    </p>

                    <div className="feature-list">

                        <div className="feature-item">
                            ✔ Project Management
                        </div>

                        <div className="feature-item">
                            ✔ Task Assignment
                        </div>

                        <div className="feature-item">
                            ✔ Bug Tracking
                        </div>

                        <div className="feature-item">
                            ✔ Team Collaboration
                        </div>

                    </div>

                </div>

            </div>

            {/* RIGHT PANEL */}

            <div className="right-panel">

                <div className="login-card">

                    <h2>Welcome Back 👋</h2>

                    <p>
                        Sign in to continue to PROJEX
                    </p>

                    <form onSubmit={handleSubmit}>

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Password</label>

                        <div className="password-box">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <span
                                className="show-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>

                        </div>

                        <div className="options">

                            <label className="remember">

                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() =>
                                        setRememberMe(!rememberMe)
                                    }
                                />

                                Remember Me

                            </label>

                            <Link to="/forgot-password">
                                Forgot Password?
                            </Link>

                        </div>

                        <button
                            className="login-btn"
                            type="submit"
                        >
                            LOGIN
                        </button>

                    </form>

                    <div className="bottom-text">

                        Don't have an account?

                        <Link to="/register">
                            <span>Sign Up</span>
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;