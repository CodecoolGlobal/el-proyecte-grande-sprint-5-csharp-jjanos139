import Card from 'react-bootstrap/Card';

export default function Movies(props) {
    const movies = props.movies;
    const dark = props.dark;
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div id="body">
                    {movies.items.map((item) => {
                        return (
                            <Card key={item.id} className={dark === "dark" ? "dark" : ""}>
                                <img className="box-office-image" src={item.image} alt="" />
                                <div id="article-text">
                                    <h5>#{item.rank} - {item.title}</h5>
                                    <p>Weeks in Box Office: {item.weeks}</p>
                                    <p>Last weekend's gross: {item.weekend}</p>
                                    <p>Total gross: {item.gross}</p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main >
        </div >)
}