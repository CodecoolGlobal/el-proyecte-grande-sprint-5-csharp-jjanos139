import Card from 'react-bootstrap/Card';

export default function Main(props) {
    const news = props.news;
    console.log(news)
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div className="text-center">
                    <h1 className="display-4"></h1>
                    <br />
                </div>
                <div id="body">
                    {news.map((item) => {
                        return (
                            <Card key={item.link} className={props.dark === "dark" ? "dark" : ""}>
                                <div id="article-text">
                                    <h5><a className={props.dark === "dark" ? "dark" : ""} href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h5>
                                    <h6 className={props.dark === "dark" ? "dark" : ""}>{item.description}</h6>
                                </div>
                                {item.imageUrl !== null ? <img id="article-image" src={item.imageUrl} alt="" /> : ""}
                            </Card>)
                    })}
                </div>
            </main>
        </div>
    )
}