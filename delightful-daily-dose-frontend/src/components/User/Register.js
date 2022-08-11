import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const nav = useNavigate();
    const [username, setUsername] = useState("");

    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        username: '',
        ispublisher: false
    });

    const [error, setError] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        username: '',
        ispublisher: false
    })

    const onInputChange = e => {
        const { name, value, type, checked } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        setUsername(input.username);
        validateInput(e);
    }

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "username":
                    if (!value) {
                        stateObj[name] = "Please enter Username.";
                    }
                    break;
                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter Email.";
                    }
                    break;
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmpassword && value !== input.confirmpassword) {
                        stateObj["confirmpassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmpassword"] = input.confirmpassword ? "" : error.confirmpassword;
                    }
                    break;
                case "confirmpassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`Register`, requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    (nav("/registered", { state: { username: username } }));
                } else {
                    document.getElementById("failed-login").style.display = "unset";
                    setTimeout(() => {
                        document.getElementById("failed-login").style.display = "none";
                    }, 3000)
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} style={{ top: "20px" }}>
            <h3 className="reg-h3">Registration</h3>
            <p id="failed-login">Username/Email is already in use!<br />Please try again!</p>
            <label className="reg-label" htmlFor="username">Username</label>
            <input
                className="form-input"
                type="text"
                name="username"
                placeholder='Enter username'
                value={input.username}
                autoComplete="username"
                onChange={onInputChange}
                onBlur={validateInput}
                required="Required"
                pattern="^[a-zA-Z0-9_\\.-]{3,20}"
            />
            <label className="reg-label" htmlFor="email">E-mail</label>
            <input
                className="form-input"
                type="email"
                name="email"
                placeholder='Enter E-mail'
                value={input.email}
                autoComplete="email"
                onChange={onInputChange}
                onBlur={validateInput}
                required="Required"
            />
            <label className="reg-label" htmlFor="password">Password</label>
            <input
                className="form-input"
                type="password"
                name="password"
                placeholder='Enter password'
                value={input.password}
                autoComplete="new-password"
                onChange={onInputChange}
                onBlur={validateInput}
                pattern="^([a-zA-Z0-9@*#]{8,15})$"
            />
            <label className="reg-label" htmlFor="confirmpassword">Confirm Password</label>
            <input
                className="form-input"
                type="password"
                name="confirmpassword"
                placeholder='Confirm Password'
                value={input.confirmpassword}
                autoComplete="new-password"
                onChange={onInputChange}
                onBlur={validateInput}
                pattern="^([a-zA-Z0-9@*#]{8,15})$"
            />
            <div className="checkbox-div">
                <label className="reg-checkbox" htmlFor="ispublisher">Are you a publisher?</label>
                <span className="checkbox-span"><input data-val="true" value="true" className="registration-checkbox"
                    type="checkbox"
                    name="ispublisher"
                    checked={input.ispublisher}
                    onChange={onInputChange}
                /></span>
                <div className="clearboth"></div>
            </div>
            <input type="submit" className="reg-button" value="Submit"></input>
        </form>
    );
}