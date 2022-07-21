import Card from 'react-bootstrap/Card';
import React from "react";

export default function Users(props) {
    const [users, setUsers] = React.useState([]);
    const dark = props.dark;

    React.useEffect(() => {
        fetch(`/Home/users`)
            .then(response => response.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    <h1>Bazdmeg</h1>
                    {users.map((item) => {
                        return (
                            <Card key={item.id} className={dark === "dark" ? "dark" : ""}>
                                <div id="article-text" className="users-text">
                                    <p>Username: {item.username}</p>
                                    <p>Email: {item.email}</p>
                                    <p>Role: {item.role}</p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main>
        </div>
    )
}