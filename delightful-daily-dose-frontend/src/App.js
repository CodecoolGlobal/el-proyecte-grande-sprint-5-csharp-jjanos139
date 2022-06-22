import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Credits from "./components/Credits";
import Error from "./components/Error";
import { Component } from "react";
import React from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            news: [],
            movies: [],
            tvshows: []
        };
        this.darkMode = this.darkMode.bind(this);
        this.changeNewsSource = this.changeNewsSource.bind(this);
        this.getTopBoxOffice = this.getTopBoxOffice.bind(this);
        this.getTopImdbTvShows = this.getTopImdbTvShows.bind(this);
    }
    darkMode() {
        if (this.state.data === "") {
            this.setState({ data: "dark" });
            document.body.classList.add('dark');
        } else {
            this.setState({ data: "" });
            document.body.classList.remove('dark');
        }
    }

    changeNewsSource(source) {
        fetch(source)
            .then(response => response.json())
            .then(data => { this.setState({ news: data }) });
    }

    componentDidMount() {
        this.changeNewsSource("/Home");
        this.getTopBoxOffice();
        this.getTopImdbTvShows();
    }

    componentDidCatch() {
        this.getTopBoxOffice();
        this.getTopImdbTvShows();
    }

    getTopBoxOffice() {
        fetch(`Home/GetTopBoxOffice`)
            .then(response => response.json())
            .then(data => { this.setState({ movies: data }) });
    }

    getTopImdbTvShows() {
        fetch(`Home/GetTopImdbTvShows`)
            .then(response => response.json())
            .then(data => { this.setState({ tvshows: data }) });
    }

    render() {
        return (
            <>
                <Header dark={this.state.data} />
                <Sidebar dark={this.state.data} darkMode={this.darkMode} changeNewsSource={this.changeNewsSource} />
                {this.props.type === "news" ? <News dark={this.state.data} news={this.state.news} /> : ""}
                {this.props.type === "movies" ? <Movies dark={this.state.data} movies={this.state.movies} /> : ""}
                {this.props.type === "tv-shows" ? <TvShows dark={this.state.data} tvshows={this.state.tvshows} /> : ""}
                {this.props.type === "credits" ? <Credits /> : ""}
                {this.props.type === "error" ? <Error /> : ""}
                <Footer dark={this.state.data} />
            </>
        )
    }
}