import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
        fetch("/Login", requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                document.getElementById("failed-login").style.display = "unset";
                setTimeout(() => {
                    document.getElementById("failed-login").style.display = "none";
                }, 3000)
            })
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data.token));
                nav("/logged", { state: { message: "Welcome back " + username + "!" } });
            });
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <h3 className="login-h3">Login Here</h3>
            <p id="failed-login">Please enter valid credentials!</p>
            <label htmlFor="username" className="reg-label">Username</label>
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
            <label htmlFor="password" className="reg-label">Password</label>
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