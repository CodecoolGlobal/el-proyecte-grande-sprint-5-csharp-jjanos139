import React from "react";
import { useNavigate } from "react-router-dom"

export default function Login(props) {
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Username: username,
            Password: password
        })
    };
    const nav = useNavigate()
    function handleSubmit(event) {
        event.preventDefault();

        fetch("/Login", requestOptions)
            .then(() => props.setUser(username))
            .then(nav("/"), { state: { username: username } })
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <h3 className="login-h3">Login Here</h3>
            <label htmlFor="username">Username</label>
            <input
                className="form-input"
                type="text"
                name="username"
                placeholder='Enter username'
                autoComplete="username"
                required="Required"
                pattern="^[a-zA-Z0-9_\\.-]{3,20}"
                value={username}
                onChange={event => setUserName(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                className="form-input"
                type="password"
                name="password"
                placeholder='Enter password'
                autoComplete="new-password"
                required="Required"
                pattern="^([a-zA-Z0-9@*#]{8,15})$"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button className="login-button">Login</button>
        </form>
    )
}