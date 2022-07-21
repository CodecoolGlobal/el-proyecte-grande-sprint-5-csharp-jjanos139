import React from "react";
import { useState } from "react";

export default function Register(props) {
    // const { handleSubmit, register, formState: { errors } } = useForm();
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        ispublisher: false
    });

    const [error, setError] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        ispublisher: false
    })

    const onInputChange = e => {
        const { name, value, type, checked } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
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

    return (
        <form method="post">
            <h3 className="reg-h3">Registration</h3>
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
            {/* {errors.email && errors.email.message} */}
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
            // {...register("password", {
            //     required: "Required",
            //     pattern: {
            //         value: /^([a-zA-Z0-9@*#]{8,15})$/i,
            //     }
            // })}
            />
            {/* {errors.password && errors.password.message} */}
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
            // {...register("confirmpassword", {
            //     required: "Required",
            //     pattern: {
            //         value: /^([a-zA-Z0-9@*#]{8,15})$/i,
            //         message: "Password must contain: Minimum 8 characters. May contain 1 UpperCase, 1 LowerCase, 1 Number and 1 Special Character!"
            //     },
            // })}
            />
            {/* {errors.confirmpassword && errors.confirmpassword.message} */}
            <div className="checkbox-div">
                <label className="reg-checkbox" htmlFor="ispublisher">Are you a publisher?</label>
                <span className="checkbox-span"><input data-val="true" value="true" className="registration-checkbox"
                    type="checkbox"
                    name="ispublisher"
                    checked={input.ispublisher}
                    onChange={onInputChange}
                // {...register("ispublisher")
                // }
                /></span>
                <div className="clearboth"></div>
            </div>
            <button className="reg-button">Submit</button>
        </form>
    );
};