import {useEffect, useState} from "react";
import {Box, Button, Grid, InputBase, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import styles from '../../styles/comment.module.css'

const TextInput = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid #ced4da',
        padding: '1% 2%',
    },
    fontFamily: 'Noto Sans KR',
    '&:focus': {
        border: '2px solid #ced4da',
    }
});


const CssTextField = styled(TextField)({
    fontFamily: 'Noto Sans KR',
    "& label.Mui-focused": {
        color: "black"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "gray"
    },
    "&:hover": {
        backgroundColor: "transparent"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "gray"
        },
        "&.Mui-focused fieldset": {
            borderColor: "gray"
        }
    }
});

const TextContentInput = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid #ced4da',
        padding: '1% 2%',
        width: '150%'
    },
    fontFamily: 'Noto Sans KR',
    '&:focus': {
        border: '2px solid #ced4da',
    }
});

const ColorButton = styled(Button)(({theme}) => ({
    color: '#ffffff',
    fontFamily: 'Noto Sans KR',
    fontWeight: 500,
    backgroundColor: '#FF6E5B',
    '&:hover': {
        backgroundColor: '#FFACA1'
    },
}));

export default function CommentComponent() {
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
                <Box
                    className={styles.box}
                    component="form"
                    noValidate
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {sm: "1fr"},
                        gap: 1.5
                    }}
                >
                    <CssTextField
                        label={"이름"}
                        required
                        id="standard-size-small"
                        size="small"
                        name={"name"}
                        placeholder={"이름"}
                        value={nameValue}
                        variant="standard"
                        onChange={onNameChange}
                    />
                    <TextContentInput
                        required
                        multiline
                        rows={2}
                        name={"content"}
                        placeholder={"내용"}
                        value={contentValue}
                        onChange={onContentChange}
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
                    <ColorButton type="submit">등록</ColorButton>
                </Box>
            </form>

            {loading ? <div>loading...</div> : (
                <div>
                    {comments.map(comment => (
                        <div key={comment._id}>
                            {comment.name} : {comment.content}<br/>
                            {comment.createdDate}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}
