import React, { useState } from "react";

// The Login component receives props from its parent component
export const Login = (props) => {
    // State variables for email and password
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission
        console.log(email); // Log the email to the console
    }

    // The component's return function renders the login form
    return (
        <div className="container">
            <div className="background-container"></div> {/* Background Container */}
            <div className="auth-form-container">
                <div className="Title-label">Login</div> {/* Title label */}
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="you@example.com"
                        id="email"
                        name="Email"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="Enter 6 Characters or more"
                        id="password"
                        name="Password"
                    />
                    <div className="form-group">
                        <input type="checkbox" id="remember-me" name="rememberMe" />
                        <div className="rememberme">Remember me</div>
                    </div>
                    <button className="link-forgotpassword" onClick={() => props.onFormSwitch('login')}>
                        Forgot Password?
                    </button>
                    <button type="submit" onClick={() => props.onFormSwitch('Login')}>LOGIN</button>
                </form>
                <div className="form-actions">
                    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
                        Don't have an account yet? Register here.
                    </button>
                </div>
            </div>
        </div>
    );
}
