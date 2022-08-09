import Card from 'react-bootstrap/Card';
import React from "react";
import authHeader from '../../authHeader';

export default function Users() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch(`/Home/users`, { headers: authHeader() })
            .then((response) => {
                if (response.status === 401) {
                    document.getElementById("failed-login").style.display = "unset";
                    setTimeout(() => {
                        document.getElementById("failed-login").style.display = "none";
                    }, 3000)
                }
                return response.json();
            }).then(data => setUsers(data));
    }, [])

    return (
        <div className="container">
            <p id="failed-login" style={{ marginLeft: "38%" }}>You don&lsquo;t have permission to access this page!</p>
            <main role="main" className="pb-3">
                <div id="body">
                    {users.map((item) => {
                        return (
                            <Card key={item.id}>
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