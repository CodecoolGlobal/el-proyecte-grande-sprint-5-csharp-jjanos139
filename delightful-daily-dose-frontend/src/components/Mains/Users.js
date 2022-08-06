import Card from 'react-bootstrap/Card';
import React from "react";
import authHeader from '../../authHeader';

export default function Users() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch(`/Home/users`, { headers: authHeader() })
            .then(response => response.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div className="container">
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