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
                                    <a href={href} target="_blank" ><h5>#{item.rank} - {item.fullTitle}</h5></a>
                                    <p>IMDb rating: {item.imDbRating} (total: {parseInt(item.imDbRatingCount).toLocaleString('en-US')})</p>
                                    <p>Starring: {item.crew}</p>
                                    {item.rankUpDown === "0" ? <p><i style={{ color: "yellow" }} className="fa-solid fa-circle"></i> #{item.rank}</p> : ""}
                                    {parseInt(item.rankUpDown) < 0 ? <p><i style={{ color: "red" }} className="fa-solid fa-circle-down"></i> #{parseInt(item.rank) + parseInt(item.rankUpDown)}</p> : ""}
                                    {parseInt(item.rankUpDown) > 0 ? <p><i style={{ color: "green" }} className="fa-solid fa-circle-up"></i> #{parseInt(item.rank) + parseInt(item.rankUpDown)}</p> : ""}
                                </div>
                            </Card>)
                    })}
                </div>
            </main >
        </div >)
}