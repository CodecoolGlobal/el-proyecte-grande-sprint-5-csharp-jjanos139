import Card from 'react-bootstrap/Card';

export default function Movies(props) {
    const tvshows = props.tvshows;
    const dark = props.dark;
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    {tvshows.items.map((item) => {
                        const href = "https://www.imdb.com/title/" + item.id;
                        return (
                            <Card key={item.id} className={dark === "dark" ? "dark" : ""}>
                                <img className="box-office-image" src={item.image} alt="" />
                                <div id="article-text">
                                    <a href={href} target="_blank" ><h5><i style={{ color: "darkslateblue" }} className="fa-solid fa-hashtag"></i> {item.rank} - {item.fullTitle}</h5></a>
                                    {item.rankUpDown === "0" ? <p><i style={{ color: "yellow", fontSize: "20px" }} className="fa-solid fa-circle"></i> {item.rank}</p> : ""}
                                    {parseInt(item.rankUpDown) < 0 ? <p><i style={{ color: "red", fontSize: "20px" }} className="fa-solid fa-circle-down"></i> {parseInt(item.rank) + parseInt(item.rankUpDown)}</p> : ""}
                                    {parseInt(item.rankUpDown) > 0 ? <p><i style={{ color: "green", fontSize: "20px" }} className="fa-solid fa-circle-up"></i> {parseInt(item.rank) + parseInt(item.rankUpDown)}</p> : ""}
                                    <p><i style={{ color: "darkslateblue", fontSize: "30px" }} className="fa-brands fa-imdb"></i> {item.imDbRating} (total: {parseInt(item.imDbRatingCount).toLocaleString('en-US')})</p>
                                    <p><i style={{ color: "pink", fontSize: "20px" }} className="fa-solid fa-star"></i> {item.crew}</p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main >
        </div >)
}