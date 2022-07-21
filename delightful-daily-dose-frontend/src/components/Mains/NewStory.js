import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import React from 'react';

export default function NewStory() {
    const tags = [
        "domestic", "foreign", "sport", "culinary", "health", "politics", "entertainment", "environment", "technology", "business"
    ]
    const [input, setInput] = React.useState({
        title: '',
        content: '',
        tag: ''
    });

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(JSON.stringify(input))
        fetch(`Stories`, {
            method: "POST",
            ContentType: "application/json",
            body: JSON.stringify({
                "title": input.title,
                "content": input.content,
                "tag": input.tag
            })
        })
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