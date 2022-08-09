import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import './Style/menu.css';
import './Style/form.css';
import './Style/searchbox.css';
import './Style/story.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebarScript';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Logged from './components/User/Logged';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App type="news" site="Home/" />}></Route>
            <Route path="/most_viewed" element={<App type="news" site="Home/most_viewed" />}></Route>
            <Route path="/domestic" element={<App type="news" site="Home/domestic" />}></Route>
            <Route path="/foreign" element={<App type="news" site="Home/foreign" />}></Route>
            <Route path="/sport" element={<App type="news" site="Home/sport" />}></Route>
            <Route path="/culinary" element={<App type="news" site="Home/culinary" />}></Route>
            <Route path="/health" element={<App type="news" site="Home/health" />}></Route>
            <Route path="/politics" element={<App type="news" site="Home/politics" />}></Route>
            <Route path="/entertainment" element={<App type="news" site="Home/entertainment" />}></Route>
            <Route path="/environment" element={<App type="news" site="Home/environment" />}></Route>
            <Route path="/techworld" element={<App type="news" site="Home/techworld" />}></Route>
            <Route path="/business" element={<App type="news" site="Home/business" />}></Route>
            <Route path="/history" element={<App type="news" site="Home/history" />}></Route>
            <Route path="/box_office_top_10" element={<App type="movies" />}></Route>
            <Route path="/coming_soon" element={<App type="coming-soon" />}></Route>
            <Route path="/imdb_top_250_tv_shows" element={<App type="tv-shows" />}></Route>
            <Route path="/youtube_top_25" element={<App type="youtube" />}></Route>
            <Route path="/stories" element={<App type="stories" />}></Route>
            <Route path="/new-story" element={<App type="new-story" />}></Route>
            <Route path="/credits" element={<App type="credits" />}></Route>
            <Route path="/register" element={<App type="register" />}></Route>
            <Route path="/login" element={<App type="login" />}></Route>
            <Route path="/registered" element={<App type="registered" />}></Route>
            <Route path="/logged" element={<Logged />}></Route>
            <Route path="/users" element={<App type="users" />}></Route>
            <Route path="/*" element={<App type="error" />}></Route>
        </Routes>
    </BrowserRouter>
);