import {useEffect, useState} from "react";
import {Box, Button, Grid, InputBase, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import styles from '../../styles/comment.module.css'
import {useFormik} from "formik";
import {Validation} from "../../util/validation";

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
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getComments = async () => {
        const response = await (await fetch("/api/comment", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })).json();
        setComments(response.comments);
        setLoading(false);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            content: '',
            date: new Date()
        },
        validationSchema: Validation,
        onSubmit: (values, {resetForm}) => {
            resetForm({});
            createComment(values).then(res => {
                console.log(res);
                getComments();
            })
        }
    });

    const createComment = async (data) => {
        const response = await (await fetch("/api/comment", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })).json();
        return response;
    }

    useEffect(() => {
        getComments().then(response => console.log(response));
    }, []);


    const {values, touched, errors, handleChange, handleSubmit} = formik;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.box}>
                    <CssTextField
                        name={"name"}
                        label={"이름"}
                        required
                        id="standard-size-small"
                        size="small"
                        placeholder={"이름"}
                        value={values.name}
                        error={touched.name && Boolean(errors.name)}
                        variant="standard"
                        onChange={handleChange}
                    />
                    <CssTextField
                        name={"content"}
                        label={"내용"}
                        required
                        multiline
                        rows={2}
                        placeholder={"내용"}
                        value={values.content}
                        error={touched.content && Boolean(errors.content)}
                        variant="standard"
                        onChange={handleChange}
                    />
                    <CssTextField
                        name={"password"}
                        type="password"
                        label={"비밀번호"}
                        required
                        id="standard-size-small"
                        size="small"
                        placeholder={"비밀번호"}
                        value={values.password}
                        error={touched.password && Boolean(errors.password)}
                        onChange={handleChange}
                        variant="standard"
                    />
                    <br/>
                    <ColorButton type="submit">등록</ColorButton>
                </div>
            </form>
            {loading ? <div>loading...</div> : (
                <div>
                    {comments.map(comment => (
                        <div key={comment._id}>
                            {comment.name} : {comment.content}<br/>
                            {comment.createdDate.toLocaleString()}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}
