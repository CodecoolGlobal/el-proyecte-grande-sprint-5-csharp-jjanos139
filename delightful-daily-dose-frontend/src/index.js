import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './menu.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebarScript'
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/box_office_top_10" element={<App />}></Route>
            <Route
                path="*"
                element={
                    <div style={{ background: "black", color: "white" }}>There's nothing here!</div>
                }
            />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
