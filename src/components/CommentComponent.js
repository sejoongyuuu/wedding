import {useEffect, useState} from "react";
import * as React from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    IconButton,
    TextField
} from "@mui/material";
import {styled} from "@mui/material/styles";
import styles from '../../styles/comment.module.css'
import {useFormik} from "formik";
import {Validation} from "../../util/validation";
import Pagination from "./Pagination";
import CommentList from "./CommetList"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {pink} from "@mui/material/colors";

const CssTextField = styled(TextField)({
    fontFamily: 'Noto Sans KR',
    '& label.Mui-focused': {
        color: '#FF7664',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#FF7664',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {},
        '&.Mui-focused fieldset': {
            borderColor: '#FF7664',
        },
    },
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function CommentComponent() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage, setCommentsPerPage] = useState(5);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log("handleClickOpen");
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getComments = async () => {
        const response = await (await fetch("/api/comment", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })).json();
        const resComments = response.comments;
        setComments(resComments);
        setTotalCount(response.totalCount);
        setLoading(false);
    }

    const indexOfLast = currentPage * commentsPerPage;
    const indexOfFirst = indexOfLast - commentsPerPage;
    const currentComments = (comments) => {
        let currentComments = 0;
        currentComments = comments.slice(indexOfFirst, indexOfLast);
        return currentComments;
    };

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
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            content: '',
        },
        validationSchema: Validation,
        onSubmit: (values, {resetForm}) => {
            resetForm({});
            createComment(values).then(res => {
                console.log(res);
                getComments().then();
            });
            handleClose();
        }
    });

    useEffect(() => {
        getComments().then(response => console.log(response));
    }, []);
    const {values, touched, errors, handleChange, handleSubmit} = formik;

    return (
        <div>
            <IconButton onClick={handleClickOpen} style={{fontSize: 'extra-large'}}>
                <AddCircleRoundedIcon style={{color: pink[500]}}/>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <Box
                    component="form"
                    padding='10%'
                    margin='10%'
                    sx={{flexGrow: 1}}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <CssTextField
                            required
                            name={"name"}
                            label={"이름"}
                            placeholder={"이름"}
                            id="custom-css-outlined-input"
                            size={"small"}
                            value={values.name}
                            error={touched.name && Boolean(errors.name)}
                            onChange={handleChange}
                            helperText={touched.name && errors.name}
                        />
                        <CssTextField
                            required
                            name={"content"}
                            label={"내용"}
                            placeholder={"내용"}
                            id="custom-css-outlined-input"
                            size={"small"}
                            value={values.content}
                            error={touched.content && Boolean(errors.content)}
                            onChange={handleChange}
                            helperText={touched.content && errors.content}
                        />
                        <CssTextField
                            required
                            type={"password"}
                            name={"password"}
                            label={"비밀번호"}
                            placeholder={"비밀번호"}
                            id="custom-css-outlined-input"
                            size={"small"}
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            onChange={handleChange}
                            helperText={touched.password && errors.password}
                        />
                        <br/>
                        <ColorButton type="submit">등록</ColorButton>
                    </div>
                </Box>
            </Dialog>
            <div className={styles.comments}>
                <CommentList
                    loading={loading}
                    comments={currentComments(comments)}
                    getComments={getComments}
                />
                <div>
                    <Pagination
                        postsPerPage={commentsPerPage}
                        totalPosts={totalCount}
                        paginate={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    )

}
