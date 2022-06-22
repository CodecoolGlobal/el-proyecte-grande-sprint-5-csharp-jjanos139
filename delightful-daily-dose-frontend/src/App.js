import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
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
            movie: false
        };
        this.darkMode = this.darkMode.bind(this);
        this.changeNewsSource = this.changeNewsSource.bind(this);
        this.changeMovieState = this.changeMovieState.bind(this);
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
        this.setState({ movie: false });
    }

    componentDidMount() {
        this.changeNewsSource("/Home")
    }

    changeMovieState() {
        this.setState({ movie: true });
    }

    render() {
        return (
            <>
                <Header dark={this.state.data} />
                <Sidebar dark={this.state.data} darkMode={this.darkMode} changeNewsSource={this.changeNewsSource} changeMovieState={this.changeMovieState} />
                {this.props.type === "news" ? <Main dark={this.state.data} news={this.state.news} movie={this.state.movie} /> : ""}
                {this.props.type === "credits" ? <Credits /> : ""}
                {this.props.type === "error" ? <Error /> : ""}
                <Footer dark={this.state.data} />
            </>
        )
    }
}