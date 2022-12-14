import React from 'react';
import { useNavigate } from 'react-router-dom';
import authHeader from '../../authHeader'

export default function NewStory() {
    const tags = [
        "domestic", "foreign", "sport", "culinary", "health", "politics",
        "entertainment", "environment", "technology", "business"
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
    const requestHeaders = authHeader();
    requestHeaders['Content-Type'] = 'application/json';

    function handleSubmit() {
        fetch(`Stories`, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(input)
        }).then(nav("/stories"))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="login-h3">Add your story</h3>
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
            <div
                className="tag-select-div"
            >
                <select
                    className="tag-selector"
                    onChange={onInputChange}
                    name="tag"
                    value={input.tag}
                >
                    {tags.map((item, index) => {
                        return (
                            <option
                                key={index}
                                value={item}
                            >{item}
                            </option>
                        )
                    })}
                </select>
                <input type="submit"></input>
            </div>
        </form >
    )
}