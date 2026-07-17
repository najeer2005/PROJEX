import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();


    const [fullName, setFullName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [officialEmail, setOfficialEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [errors, setErrors] = useState({});

    function validateForm() {

    let newErrors = {};

    if (!fullName.trim()) {
        newErrors.fullName = "Full Name is required";
    }

    if (!employeeId.trim()) {
        newErrors.employeeId = "Employee ID is required";
    }

    if (!officialEmail.trim()) {
        newErrors.officialEmail = "Official Email is required";
    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(officialEmail)
    ) {
        newErrors.officialEmail = "Enter a valid email";
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
        newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }

    if (!passwordRegex.test(password)) {
        newErrors.password = "Choose a strong password";
    }

    if (!confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

}

    function handleSubmit(e) {

    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const user = {
        fullName,
        employeeId,
        officialEmail,
        phoneNumber,
        password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("🎉 Account created successfully!");

    setFullName("");
    setEmployeeId("");
    setOfficialEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});

    navigate("/login");
}

    return (

        <div className="register-page">

            <div className="register-card">

                <h2>Create Employee Account</h2>

                <p>Create your Projex employee account</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-grid">

                        <div className="input-group">

                            <label>Full Name</label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) => {
    setFullName(e.target.value);

    setErrors({
        ...errors,
        fullName: ""
    });
}}
                            />
                            {errors.fullName && (
                                <p className="error-text">
                                    {errors.fullName}
                                </p>
                            )}


                        </div>

                        <div className="input-group">

                            <label>Employee ID</label>

                            <input
                                type="text"
                                placeholder="Enter Employee ID"
                                value={employeeId}
                                onChange={(e) => {
                                    setEmployeeId(e.target.value);

                                        setErrors({
                                             ...errors,
                                            employeeId: ""
                                        });
                                }   }
                            />
                            {errors.employeeId && (
                                <p className="error-text">
                                    {errors.employeeId}
                                </p>
                            )}

                        </div>

                        <div className="input-group">

                            <label>Official Email</label>

                            <input
                                type="email"
                                placeholder="Enter official email"
                                value={officialEmail}
                                onChange={(e) => {
                                    setOfficialEmail(e.target.value);

                                    setErrors({
                                        ...errors,
                                        officialEmail: ""
                                    });
                                }}
                            />
                            {errors.officialEmail && (
                                <p className="error-text">
                                    {errors.officialEmail}
                                </p>
                            )}

                        </div>

                        <div className="input-group">

                            <label>Phone Number</label>

                            <input
                                type="text"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);

                                    setErrors({
                                        ...errors,
                                        phoneNumber: ""
                                    });
                                }}
                            />
                            {errors.phoneNumber && (
                                <p className="error-text">
                                    {errors.phoneNumber}
                                </p>
                            )}

                        </div>

                        <div className="input-group">

                            <label>Password</label>

                            <div className="password-box">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create password"
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

                        </div>

                        <div className="input-group">

                            <label>Confirm Password</label>

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);

                                    setErrors({
                                        ...errors,
                                        confirmPassword: ""
                                    });
                                }}
                            />
                            {errors.confirmPassword && (
                                <p className="error-text">
                                    {errors.confirmPassword}
                                </p>
                            )}

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="register-btn"
                    >
                        CREATE ACCOUNT
                    </button>

                </form>

                <div className="bottom-text">

                    Already have an account?

                    <Link to="/login">Login</Link>

                </div>

            </div>

        </div>

    );

}
export default Register;