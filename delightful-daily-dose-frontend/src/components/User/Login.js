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
            .then((resp) => resp.json())
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data.token));
                nav("/logged", { state: { username: username } });
            });
    }

    return (
        <form method="post" onSubmit={handleSubmit} className={props.dark === "dark" ? "dark" : ""}>
            <h3 className={props.dark === "dark" ? "login-h3 dark" : "login-h3"}>Login Here</h3>
            <label htmlFor="username" className={props.dark === "dark" ? "reg-label dark" : "reg-label"}>Username</label>
            <input
                className={props.dark === "dark" ? "form-input dark" : "form-input"}
                type="text"
                name="username"
                placeholder='Enter username'
                autoComplete="username"
                required="Required"
                pattern="^[a-zA-Z0-9_\\.-]{3,20}"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <label htmlFor="password" className={props.dark === "dark" ? "reg-label dark" : "reg-label"}>Password</label>
            <input
                className={props.dark === "dark" ? "form-input dark" : "form-input"}
                type="password"
                name="password"
                placeholder='Enter password'
                autoComplete="new-password"
                required="Required"
                pattern="^([a-zA-Z0-9@*#]{8,15})$"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button className={props.dark === "dark" ? "login-button dark" : "login-button"}>Login</button>
        </form>
    )
}