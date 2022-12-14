import Card from 'react-bootstrap/Card';
import React from 'react';
import authHeader from '../../authHeader';

export default function TvShows() {
    const [tvshows, setTvshows] = React.useState([]);

    React.useEffect(() => {
        fetch(`Home/GetTopImdbTvShows`, { headers: authHeader() })
            .then((response) => {
                if (response.status === 401) {
                    document.getElementById("failed-login").style.display = "unset";
                    setTimeout(() => {
                        document.getElementById("failed-login").style.display = "none";
                    }, 3000)
                }
                return response.json();
            }).then(data => setTvshows(data.items));
    }, [])

    return (
        <div className="container">
            <p id="failed-login" style={{ marginLeft: "42%" }}>Please login first to see the list!</p>
            <main role="main" className="pb-3">
                <div id="body">
                    {tvshows.map((item) => {
                        const href = "https://www.imdb.com/title/" + item.id;
                        return (
                            <Card key={item.id}>
                                <img className="box-office-image" src={item.image} alt="" />
                                <div id="article-text">
                                    <a href={href} target="_blank" rel="noreferrer"><h5><i style={{ color: "darkslateblue" }} className="fa-solid fa-hashtag"></i> {item.rank} - {item.fullTitle}</h5></a>
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
        </div>
    )
}