import {useEffect, useState} from "react";
import {Button, Grid, InputBase, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const TextInput = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid #ced4da',
        padding: '1% 2%',
        margin: '2%'
    },
    fontFamily: 'Noto Sans KR',
    '&:focus': {
        border: '2px solid #000000',
    }
});

const TextContentInput = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid #ced4da',
        padding: '1% 2%',
        margin: '2%',
        width: '150%'
    },
    fontFamily: 'Noto Sans KR',
    '&:focus': {
        border: '2px solid #000000',
    }
});

const ColorButton = styled(Button)(({ theme }) => ({
    border: '1px solid #ced4da',
    '&:hover': {
        border:'2px solid #ced4da',
    },
}));

export default function CommentComponent(styles) {
    const [nameValue, setNameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [contentValue, setContentValue] = useState("");
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const onNameChange = e => {
        setNameValue(e.target.value);
    }
    const onPasswordChange = e => {
        setPasswordValue(e.target.value);
    }
    const onContentChange = e => {
        setContentValue(e.target.value);
    }
    const makeEmpty = () => {
        setNameValue("");
        setPasswordValue("");
        setContentValue("");
    }
    const getComments = async () => {
        const resultJson = await (await fetch("/api/comment", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })).json();
        setComments(resultJson.comments);
        setLoading(false);
    }
    useEffect(() => {
        getComments()
    }, []);
    console.log(comments);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.currentTarget.name.value,
            password: e.currentTarget.password.value,
            content: e.currentTarget.content.value
        }
        console.log("data:" + data);
        await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        getComments();
        makeEmpty();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput
                    required
                    id="standard-size-small"
                    size="small"
                    name={"name"}
                    placeholder={"이름"}
                    value={nameValue}
                    onChange={onNameChange}
                />
                <TextInput
                    required
                    id="standard-size-small"
                    size="small"
                    name={"password"}
                    placeholder={"비밀번호"}
                    value={passwordValue}
                    onChange={onPasswordChange}
                    type="password"/>
                <br/>
                <TextContentInput
                    required
                    multiline
                    rows={2}
                    name={"content"}
                    placeholder={"내용"}
                    value={contentValue}
                    onChange={onContentChange}
                />

                <ColorButton type="submit">등록</ColorButton>
            </form>
            {loading ? <div>loading...</div> : (
                <div>
                    {comments.map(comment => (
                        <div>
                            {comment.name} : {comment.content}<br/>
                            {comment.createdDate}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}
