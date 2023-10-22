import React, { useState } from "react";

// The Register component receives props from its parent component
export const Register = (props) => {
    // State variables for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission
        console.log(email); // Log the email to the console
        console.log(password); // Log the password to the console
        console.log(firstName); // Log the first name to the console
        console.log(lastName); // Log the last name to the console
        console.log(username); // Log the username to the console
    }

    // The component's return function renders the registration form
    return (
        <div className="container">
            <div className="registerbackground-container"></div> {/* Background Container */}
            <div className="register-form-container">
                <div className="Register_Title-label">Register</div> {/* Title label */}
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="name-fields">
                            <div className="input-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text"
                                    placeholder="Enter 6 Characters or more"
                                    id="firstName"
                                    name="firstName"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    placeholder="Enter 6 Characters or more"
                                    id="lastName"
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="you@example.com"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Enter 6 Characters or more"
                                id="username"
                                name="username"
                            />
                        </div>
                    </div>
                    <div className="password-fields">
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter 6 Characters or more"
                                id="password"
                                name="password"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="retypePassword">Retype Password</label>
                            <input
                                value={retypePassword}
                                onChange={(e) => setRetypePassword(e.target.value)}
                                type="password"
                                placeholder="Enter 6 Characters or more"
                                id="retypePassword"
                                name="retypePassword"
                            />
                        </div>
                    </div>
                    <div className="btn_Signup">
                        <button type="submit" onClick={() => props.onFormSwitch('login')}>
                            SIGN UP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
