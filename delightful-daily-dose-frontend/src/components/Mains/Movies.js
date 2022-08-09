import Card from 'react-bootstrap/Card';
import React from 'react';
import authHeader from '../../authHeader';

export default function Movies() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        fetch(`/Home/GetTopBoxOffice`, { headers: authHeader() })
            .then((response) => {
                if (response.status === 401) {
                    document.getElementById("failed-login").style.display = "unset";
                    setTimeout(() => {
                        document.getElementById("failed-login").style.display = "none";
                    }, 3000)
                }
                return response.json();
            }).then(data => setMovies(data.items));
    }, [])

    return (
        <div className="container">
            <p id="failed-login" style={{ marginLeft: "42%" }}>Please login first to see the list!</p>
            <main role="main" className="pb-3">
                <div id="body">
                    {movies.map((item) => {
                        const href = "https://www.imdb.com/title/" + item.id;
                        return (
                            <Card key={item.id}>
                                <img className="box-office-image" src={item.image} alt="" />
                                <div id="article-text">
                                    <a href={href} target="_blank" rel="noreferrer"><h5>#{item.rank} - {item.title}</h5></a>
                                    <p>Weeks in Box Office: {item.weeks}</p>
                                    <p>Last weekend&lsquo;s gross: {item.weekend}</p>
                                    <p>Total gross: {item.gross}</p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main>
        </div>
    )
}