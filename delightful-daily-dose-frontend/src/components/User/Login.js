import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Cookies from "universal-cookie";

export default function Login(props) {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Username: username,
            Password: password
        })
    };

    function handleSubmit(event) {
        event.preventDefault();
        // const cookies = new Cookies();

        fetch("/Login", requestOptions)
            // .then(() => props.setNewUserData(cookies.get('user')))
            .then(() => nav("/logged", { state: { username: username } }));
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
                onChange={event => setUsername(event.target.value)}
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