import Card from 'react-bootstrap/Card';
import React from "react";
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import authHeader from '../../authHeader';

export default function Story() {
    const [stories, setStories] = React.useState([]);
    const cookies = new Cookies();
    const cookie = cookies.get('user');
    React.useEffect(() => {
        fetch(`Stories`, { headers: authHeader() })
            .then(response => response.json())
            .then(data => setStories(data));
    }, [])

    return (
        <div className="container">
            <main role="main" className="pb-3">
                {cookie ? <Link to="/new-story" className="new-story"><i className="fa-solid fa-feather-pointed"></i> Add new story</Link> : ""}
                <div id="body">
                    {stories.map((item) => {
                        const url = "Stories/" + item.id;
                        const year = new Date(item.publishTime).getFullYear();
                        const month = new Date(item.publishTime).getMonth() + 1;
                        const day = new Date(item.publishTime).getDate();
                        console.log(year + month + day);
                        return (
                            <Card key={item.id}>
                                {/* <img className="box-office-image" src={item.image} alt="" /> */}
                                <div id="article-text">
                                    <h5><a href={url} target="_blank" rel="noreferrer">{item.title}</a></h5>
                                    <h6>{item.content}</h6>
                                    <h6>{item.tag}</h6>
                                    <p><i className="fa-solid fa-upload"></i> {year}-{month}-{day} </p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main >
        </div >
    )
}