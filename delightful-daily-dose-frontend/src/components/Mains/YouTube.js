import Card from 'react-bootstrap/Card';
import React from 'react';
import authHeader from '../../authHeader';

export default function YouTube() {
    const [youtube, setYoutube] = React.useState([]);

    React.useEffect(() => {
        fetch(`Home/GetYoutubeMostViewed`, { headers: authHeader() })
            .then((response) => {
                if (response.status === 401) {
                    document.getElementById("failed-login").style.display = "unset";
                    setTimeout(() => {
                        document.getElementById("failed-login").style.display = "none";
                    }, 3000)
                }
                return response.json();
            }).then(data => setYoutube(data.items));
    }, [])

    return (
        <div className="container">
            <p id="failed-login" style={{ marginLeft: "42%" }}>Please login first to see the list!</p>
            <main role="main" className="pb-3">
                <div id="body">
                    {youtube.map((item) => {
                        const href = "https://www.youtube.com/embed/" + item.id;
                        const publishedAt = item.snippet.publishedAt.replace("T", "\n").replace("Z", "");
                        return (
                            <Card key={item.id}>
                                <iframe className="youtube-iframe" src={href} title="YouTube video player"></iframe>
                                <div id="article-text" className="youtube-text">
                                    <p>{item.snippet.title}</p>
                                    <p><i style={{ color: "green" }} className="fa-solid fa-circle-up"></i> {publishedAt}</p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main>
        </div>
    )
}