import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Component } from "react";
import React from "react"

export default class App extends Component {
    constructor() {
        super();
        this.state = { data: "" };
        this.darkMode = this.darkMode.bind(this);
    }
    darkMode() {
        if (this.state.data === "") {
            this.setState({ data: "dark" });
        } else {
            this.setState({ data: "" });
        }
    }

    render() {

        return (
            <>
                <Header dark={this.state.data} />
                <Footer dark={this.state.data} />
                <Sidebar dark={this.state.data} darkMode={this.darkMode} />
            </>
        )
    }
}