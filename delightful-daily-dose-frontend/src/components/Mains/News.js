import Card from 'react-bootstrap/Card';
import React from "react";
import authHeader from '../../authHeader';

export default function News(props) {
    const [news, setNews] = React.useState([])
    const [filteredNews, setFilteredNews] = React.useState(news)
    const dark = props.dark;

    React.useEffect(() => {
        fetch(props.site, {headers: authHeader()})
            .then(response => response.json())
            .then(data => {
                setNews(data);
                setFilteredNews(data);
            });
    }, [props])

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div className="search-container">
                    <input type="text" name="search" placeholder="Search..." className="search-input" spellCheck="false" onChange={(event) => props.handleSearch(event, news, setFilteredNews)}></input>
                    <div className="search"></div>
                    <p className="article-numbers">Articles: {filteredNews.length}</p>
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
            </main >
        </div >
    )
}