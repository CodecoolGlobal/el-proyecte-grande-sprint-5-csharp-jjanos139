import React from 'react';
import Movies from './Movies';
import News from './News'

export default function Main(props) {
    const news = props.news;
    const [movies, setMovies] = React.useState();
    function GetTopBoxOffice() {
        window.fetch(`Home/GetTopBoxOffice`).then((response) => {
            response.json().then((data) => {
                setMovies(data);
            });
        });
    }
    React.useEffect(() => {
        GetTopBoxOffice();
    }, [])
    if (props.movie) {
        return (
            <Movies movies={movies} dark={props.dark} />
        )
    }
    else {
        return (
            < News news={news} dark={props.dark} />
        )
    }
}