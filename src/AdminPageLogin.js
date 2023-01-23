import React, { useState } from "react"
import logo from "./ParkLogo.png"
import "./UserPageLogin.css"

function AdminPageLogin() {
    const [selectedOption, setSelectedOption] = useState("Admin")
    const options = ["Admin","Client",  "User"]
    const [isChecked, setIsChecked] = useState(false)

return (
    <>
        <div>
            <header className="header">
                <img src={logo} alt="Logo" className="image" />
            </header>
            <div className="container">
            <label className="user-login-label">Admin Login</label>
                <div className="white-box">
                    <div className="input-container">
                        <select className="dropdown-menu" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                            {options.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <label className="label-username">Username:</label>
                        <input type="text" placeholder="Enter your username" className="input-box" />
                        <label className="label-password">Password:</label>
                        <input type="password" placeholder="Enter your password" className="input-box" />
                        <div className="keep-signed-in">
                            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                            <label>Keep me signed in</label>
                        </div>
                        <div className="button-container">
                            <button className="continue-button">Continue</button>
                        </div>
                    </div>
                </div>
                <button className="return-button">Return to Main Page</button>
                <button className="create-account-button">Create Account</button>
            </div>
        </div>
        {/*<footer className="footer">
            <div className="footer-info">
                <p>General Information</p>
                <p>Phone: (807) 938-6534</p>
                <p>Address: Box 730, 479 Government Street Dryden, ON P8N 2Z4</p>
            </div>
        </footer>*/}
    </>
)

}

export default AdminPageLogin


