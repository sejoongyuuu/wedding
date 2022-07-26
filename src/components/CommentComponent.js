import {useState} from "react";

export default function CommentComponent() {
    const [nameValue, setNameValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    const onNameChange = e => {
        setNameValue(e.target.value);
    }
    const onContentChange = e => {
        setContentValue(e.target.value);
    }
    const handleClick = (e) => {
        const comment = {name: nameValue, content: contentValue};
        console.log(comment);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submit!");
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input value={nameValue} onChange={onNameChange} type="text" name="name" placeholder="이름"></input>
                <textarea value={contentValue} onChange={onContentChange} type="text" name="content"
                          placeholder="내용"></textarea>
                <button type="submit" onClick={handleClick}>click</button>
            </form>
        </div>
    )

}
