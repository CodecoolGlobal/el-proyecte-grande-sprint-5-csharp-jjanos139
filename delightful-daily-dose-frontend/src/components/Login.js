export default function Login() {
    return (
        <form method="post">
            <h3 className="login-h3">Login Here</h3>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                placeholder='Enter username'
                required="Required"
                pattern="^[a-zA-Z0-9_\\.-]{3,20}"

            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder='Enter password'
                required="Required"
                pattern="^([a-zA-Z0-9@*#]{8,15})$"
            />
            <button className="login-button">Login</button>
        </form>
    )

}