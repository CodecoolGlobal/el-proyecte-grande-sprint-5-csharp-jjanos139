import Card from 'react-bootstrap/Card';

export default function Movies(props) {
    const movies = props.movies;
    const dark = props.dark;
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div className="text-center">
                    <h3 className="display-4">Box Office Top 10 US</h3>
                    <br />
                </div>
                <div id="body">
                    {movies.items.map((item) => {
                        return (
                            <Card key={item.id} className={props.dark === "dark" ? "dark" : ""}>
                                <img style={{ "width": "100px", "float": "right" }} src={item.image} alt="" />
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