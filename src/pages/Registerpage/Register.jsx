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
    const [Num,setNum]=useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [PMSG,setPMSG]=useState("");
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
       setPMSG("please check! Both passwords has to be match")
        if (!passwordRegex.test(password)){
        setPMSG("choose a strong password")

        }

    }
    if(phoneNumber.length !==10){
        setNum("Please enter a valid number");
        return;
    }
  else {
    const user = {
        fullName,
        employeeId,
        officialEmail,
        phoneNumber,
        password
    };

    // Save user temporarily
    localStorage.setItem("user", JSON.stringify(user));

    alert("🎉 Account created successfully!");
}  
    // Clear the form
    setFullName("");
    setEmployeeId("");
    setOfficialEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");

    // Redirect to Login
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
                                onChange={(e) => setFullName(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <label>Employee ID</label>

                            <input
                                type="text"
                                placeholder="Enter Employee ID"
                                value={employeeId}
                                onChange={(e) => setEmployeeId(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <label>Official Email</label>

                            <input
                                type="email"
                                placeholder="Enter official email"
                                value={officialEmail}
                                onChange={(e) => setOfficialEmail(e.target.value)}
                            />

                        </div>

                        <div className="input-group">

                            <label>Phone Number</label>

                            <input
                                type="text"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <p>{Num}</p>

                        </div>

                        <div className="input-group">

                            <label>Password</label>

                            <div className="password-box">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create password"
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

                        </div>

                        <div className="input-group">

                            <label>Confirm Password</label>

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <p>{PMSG}</p>

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