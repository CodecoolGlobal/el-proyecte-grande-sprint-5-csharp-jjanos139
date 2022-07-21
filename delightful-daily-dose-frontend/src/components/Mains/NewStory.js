import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewStory() {
    const tags = [
        "domestic", "foreign", "sport", "culinary", "health", "politics", "entertainment", "environment", "technology", "business"
    ]

    const nav = useNavigate();

    const [input, setInput] = React.useState({
        title: '',
        content: '',
        tag: 'domestic'
    });

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit() {
        fetch(`Stories`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        }).then(nav("/stories"))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-input"
                placeholder="Enter title"
                name="title"
                value={input.title}
                onChange={onInputChange}
                required="Required"
                spellCheck="false"
            >
            </input>
            <textarea
                className="form-input"
                placeholder="Enter content"
                name="content"
                value={input.content}
                onChange={onInputChange}
                required="Required"
                spellCheck="false"
            >
            </textarea>
            <select className="animated fadeInLeft"
                onChange={onInputChange}
                name="tag"
                value={input.tag}
            >
                {tags.map((item) => {
                    return (
                        <option
                            key={item.id}
                            className="menu-list-item"
                            value={item}
                        >{item}
                        </option>
                    )
                })}
            </select>
            <input type="submit"></input>
        </form>
    )
}