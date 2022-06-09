import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { Component } from "react";
import React from "react"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: "",
            news: []
        };
        this.darkMode = this.darkMode.bind(this);
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

    componentDidMount() {
        fetch('/Home')
            .then(response => response.json())
            .then(data => { this.setState({ news: data }) });
    }

    render() {
        console.log(this.state.news)
        return (
            <>
                <Header dark={this.state.data} />
                <Sidebar dark={this.state.data} darkMode={this.darkMode} />
                <Main dark={this.state.data} news={this.state.news} />
                <Footer dark={this.state.data} />
            </>
        )
    }
}