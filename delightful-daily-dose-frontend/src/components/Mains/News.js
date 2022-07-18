import Card from 'react-bootstrap/Card';
import React from "react";

export default function News(props) {
    const [news, setNews] = React.useState([])
    const [filteredNews, setFilteredNews] = React.useState(news);
    const dark = props.dark;

    React.useEffect(() => {
        const source = "Home" + window.location.pathname;
        fetch(source)
            .then(response => response.json())
            .then(data => {
                setNews(data);
                setFilteredNews(data);
            });
    }, [window.location.pathname])

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div className="search">
                    <label id="search-input" for="input">Search:</label>
                    <input id="input" type="text" onChange={(event) => props.handleSearch(event, news, setFilteredNews)}></input>
                    <p>Articles: {filteredNews.length}</p>
                </div>
                <div id="body">
                    {filteredNews.map((item) => {
                        return (
                            <Card key={item.link} className={dark === "dark" ? "dark" : ""}>
                                {item.image_url !== null ? <img id="article-image" src={item.image_url} alt="" /> : ""}
                                <div id="article-text">
                                    <h5><a className={dark === "dark" ? "dark" : ""} href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h5>
                                    <h6 className={dark === "dark" ? "dark" : ""}>{item.description}</h6>
                                    <p><i className="fa-solid fa-upload"></i> {item.pubDate}</p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main>
        </div>
    )
}