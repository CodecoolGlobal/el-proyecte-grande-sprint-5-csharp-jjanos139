import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import './Style/menu.css';
import './Style/form.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebarScript';
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
            <Route path="/" element={<App type="news" />}></Route>
            <Route path="/most_viewed" element={<App type="news" />}></Route>
            <Route path="/domestic" element={<App type="news" />}></Route>
            <Route path="/foreign" element={<App type="news" />}></Route>
            <Route path="/sport" element={<App type="news" />}></Route>
            <Route path="/culinary" element={<App type="news" />}></Route>
            <Route path="/health" element={<App type="news" />}></Route>
            <Route path="/politics" element={<App type="news" />}></Route>
            <Route path="/entertainment" element={<App type="news" />}></Route>
            <Route path="/environment" element={<App type="news" />}></Route>
            <Route path="/techworld" element={<App type="news" />}></Route>
            <Route path="/business" element={<App type="news" />}></Route>
            <Route path="/box_office_top_10" element={<App type="movies" />}></Route>
            <Route path="/coming_soon" element={<App type="coming-soon" />}></Route>
            <Route path="/imdb_top_100_tv_shows" element={<App type="tv-shows" />}></Route>
            <Route path="/youtube_top_25" element={<App type="youtube" />}></Route>
            <Route path="/credits" element={<App type="credits" />}></Route>
            <Route path="/Register" element={<App type="register" />}></Route>
            <Route path="/Login" element={<App type="login" />}></Route>
            <Route path="/*" element={<App type="error" />}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
