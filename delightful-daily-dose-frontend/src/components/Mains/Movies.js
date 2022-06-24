import Card from 'react-bootstrap/Card';
import React from 'react';

export default function Movies(props) {
    const dark = props.dark;
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        fetch(`/Home/GetTopBoxOffice`)
            .then(response => response.json())
            .then(data => setMovies(data.items));
    }, [])

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    {movies.map((item) => {
                        const href = "https://www.imdb.com/title/" + item.id;
                        return (
                            <Card key={item.id} className={dark === "dark" ? "dark" : ""}>
                                <img className="box-office-image" src={item.image} alt="" />
                                <div id="article-text">
                                    <a href={href} target="_blank" rel="noreferrer"><h5>#{item.rank} - {item.title}</h5></a>
                                    <p>Weeks in Box Office: {item.weeks}</p>
                                    <p>Last weekend's gross: {item.weekend}</p>
                                    <p>Total gross: {item.gross}</p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main>
        </div>
    )
}