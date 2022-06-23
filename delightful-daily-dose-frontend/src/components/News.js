import Card from 'react-bootstrap/Card';

export default function News(props) {
    const news = props.news;
    const dark = props.dark;
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    {news.map((item) => {
                        return (
                            <Card key={item.link} className={dark === "dark" ? "dark" : ""}>
                                {item.image_url !== null ? <img id="article-image" src={item.image_url} alt="" /> : ""}
                                <div id="article-text">
                                    <h5><a className={dark === "dark" ? "dark" : ""} href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h5>
                                    <h6 className={dark === "dark" ? "dark" : ""}>{item.description}</h6>
                                </div>
                            </Card>)
                    })}
                </div>
            </main>
        </div>
    )
}