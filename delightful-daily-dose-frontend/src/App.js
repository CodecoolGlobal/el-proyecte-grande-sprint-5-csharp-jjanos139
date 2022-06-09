import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Component, useEffect } from "react";
import { render } from "@testing-library/react";

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Footer />
                <Sidebar />
            </>
                )
    }
        
    
}