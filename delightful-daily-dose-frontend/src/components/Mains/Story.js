import Card from 'react-bootstrap/Card';
import React from "react";
import { Link } from 'react-router-dom';


export default function Story(props) {
    const [stories, setStories] = React.useState([]);
    const dark = props.dark;

    React.useEffect(() => {
        fetch(`Stories`)
            .then(response => response.json())
            .then(data => setStories(data));
    }, [])

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <Link to="/new-story" className="new-story"><i className="fa-solid fa-feather-pointed"></i> Add new story</Link>
                <div id="body">
                    {stories.map((item) => {
                        const url = "Stories/" + item.id;
                        const year = new Date(item.publishTime).getFullYear();
                        const month = new Date(item.publishTime).getMonth() + 1;
                        const day = new Date(item.publishTime).getDate();
                        return (
                            <Card key={item.id} className={dark === "dark" ? "dark" : ""}>
                                {/* <img className="box-office-image" src={item.image} alt="" /> */}
                                <div id="article-text">
                                    <h5><a className={dark === "dark" ? "dark" : ""} href={url} target="_blank" rel="noreferrer">{item.title}</a></h5>
                                    <h6 className={dark === "dark" ? "dark" : ""}>{item.content}</h6>
                                    <p><i className="fa-solid fa-upload"></i> {year}-{month}-{day} </p>
                                </div>
                            </Card>)
                    })}
                </div>
            </main >
        </div>
    )
}