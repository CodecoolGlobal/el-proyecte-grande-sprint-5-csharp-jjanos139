import Card from 'react-bootstrap/Card';

export default function Movies(props) {
    const comingSoon = props.comingSoon;
    const dark = props.dark;
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    {comingSoon.items.map((item) => {
                        const href = "https://www.imdb.com/title/" + item.id;
                        return (
                            <Card key={item.id} className={dark === "dark" ? "dark" : ""}>
                                <img className="box-office-image" src={item.image} alt="" />
                                <div id="article-text">
                                    <a href={href} target="_blank" rel="noreferrer"><h5>{item.title}</h5></a>
                                    <p className="coming-soon-text">Release: {item.releaseState} / Rating: {item.contentRating} / Runtime: {item.runtimeStr}</p>
                                    <p className="coming-soon-text">Genres: {item.genres}</p>
                                    <p className="coming-soon-text"><i style={{ fontSize: "20px" }} className="fa-solid fa-clapperboard"></i>
                                        {item.directorList.map((director) => {
                                            const directorHref = "https://www.imdb.com/name/" + director.id;
                                            return (
                                                <a href={directorHref}> {director.name} </a>
                                            )
                                        })}
                                    </p>
                                    <p className="coming-soon-text"><i style={{ color: "pink", fontSize: "20px" }} className="fa-solid fa-star"></i>
                                        {item.starList.map((star) => {
                                            const starHref = "https://www.imdb.com/name/" + star.id;
                                            return (
                                                <a href={starHref}> {star.name} </a>
                                            )
                                        })}
                                    </p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main >
        </div >)
}