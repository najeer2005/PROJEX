import { useState } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    function validateForm() {

    let newErrors = {};

    if (!email.trim()) {

        newErrors.email = "Email is required";

    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

        newErrors.email = "Enter a valid email address";

    }

    if (!password.trim()) {

        newErrors.password = "Password is required";

    } else if (password.length < 8) {

        newErrors.password =
            "Password must be at least 8 characters";

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

}
    function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {

    return;

}

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if any account exists
    if (!storedUser) {
        alert("Please create an account first.");
        return;
    }

    // Validate credentials
    if (
        email.trim() === storedUser.officialEmail.trim() &&
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
                            onChange={(e) => {
                                setEmail(e.target.value);

                                setErrors({
                                ...errors,
                                email: ""
                                });

                            }}
                        />
                        {errors.email && (

                            <p className="error-text">

                            {errors.email}

                            </p>

                        )}

                        <label>Password</label>

                        <div className="password-box">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors({
                                        ...errors,
                                        password: ""
                                    });
                                }}
                            />

                            <span
                                className="show-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>

                        </div>

                        {errors.password && (
                            <p className="error-text">
                                {errors.password}
                            </p>
                        )}

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