import React, { useState } from 'react';
import './UserSetting.css'
import logo from './ParkLogo.png'


function UserSetting() {
    const [language, setLanguage] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');

    return (
        <>
            <header className="header">
                <img src={logo} alt="Logo" className="image" />
            </header><div className="user-setting">
                <div className="header-2">
                    <span className="setting-header-label">Settings</span>
                </div>
                <h1 className="title">Personal Information</h1>
                <div className="subtitle">General User Information</div>
                <div className="container">
                    <div className="input-group">
                        <label>Language:</label>
                        <input type="text" value={language} onChange={e => setLanguage(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Phone Number:</label>
                        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Location:</label>
                        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
                    </div>
                    <div className="button-container">
                        <button className="save-button">Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserSetting;