import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignInPage() {
    const navigate = useNavigate();
    const [orgName, setOrgName] = useState('');
    const [orgLocation, setOrgLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === "orgName") {
            setOrgName(value);
        } else if (id === "orgLocation") {
            setOrgLocation(value);
        }
        setErrorMessage(''); // Clear error message upon any input change
    }

    const navigateToMainPage = () => {
        if (!orgName && !orgLocation) {
            setErrorMessage('Please fill in the organization name and choose a location.');
        } else if (!orgName) {
            setErrorMessage('Please fill in the organization name.');
        } else if (!orgLocation) {
            setErrorMessage('Please choose a location.');
        } else {
            console.log('Data to be sent to DB:', { orgName, orgLocation });
            navigate('/main'); // Use the navigate function from useNavigate hook
        }
    }

    const closePage = () => {
        window.close();
    }

    return (
        <div id="signInPage" className="page">
            <div className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <span>Financial Management</span>
            </div>

            <div className="welcome-text">
                Welcome,
                <p>Let us know what is your organization's name &amp; where your business is</p>
            </div>

            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <div className="form-container">
                <label htmlFor="orgName">Organization Name*</label>
                <input type="text" id="orgName" onChange={handleInputChange} />

                <label htmlFor="orgLocation">Organization Location*</label>
                <select id="orgLocation" onChange={handleInputChange}>
                    <option value="">Select a location</option>
                    <option value="Location 1">Canada</option>
                    <option value="Location 2">China</option>
                    <option value="Location 3">USA</option>
                    <option value="Location 4">Europe</option>
                </select>

                <button onClick={navigateToMainPage}>Let's get started!</button>
                <button onClick={closePage}>Cancel</button>
            </div>
        </div>
    );
}

export default SignInPage;
