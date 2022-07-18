import Card from 'react-bootstrap/Card';
import React from 'react';

export default function YouTube(props) {
    const [youtube, setYoutube] = React.useState([]);
    const dark = props.dark;

    React.useEffect(() => {
        fetch(`Home/GetYoutubeMostViewed`)
            .then(response => response.json())
            .then(data => setYoutube(data.items));
    }, [])

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    {youtube.map((item) => {
                        const href = "https://www.youtube.com/embed/" + item.id;
                        const publishedAt = item.snippet.publishedAt.replace("T", "\n").replace("Z", "");
                        return (
                            <Card key={item.id} className={dark === "dark" ? "dark" : ""}>
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