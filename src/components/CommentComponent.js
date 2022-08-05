import {useEffect, useState} from "react";
import * as React from 'react';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField
} from "@mui/material";
import {styled} from "@mui/material/styles";
import styles from '../../styles/comment.module.css'
import {useFormik} from "formik";
import {Validation} from "../../util/validation";
import Pagination from "./Pagination";
import CommentList from "./CommetList"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {pink} from "@mui/material/colors";
import Image from "next/image";
import message from "../../public/images/picture/message.PNG"
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

const CssTextField = styled(TextField)({
    fontFamily: 'Noto Sans KR', width: "40%", paddingRight: "2%", '& label.Mui-focused': {
        color: '#000000',
    }, '& .MuiInput-underline:after': {
        borderBottomColor: '#000000',
    }, '& .MuiOutlinedInput-root': {
        '& fieldset': {}, '&.Mui-focused fieldset': {
            borderColor: '#000000',
        },
    },
});
const CssContentsField = styled(TextField)({
    fontFamily: 'Noto Sans KR', width: "82%", '& label.Mui-focused': {
        color: '#000000',
    }, '& .MuiInput-underline:after': {
        borderBottomColor: '#000000',
    }, '& .MuiOutlinedInput-root': {
        '& fieldset': {}, '&.Mui-focused fieldset': {
            borderColor: '#000000',
        },
    },
});

const RedditTextField = styled((props) => (
    <TextField InputProps={{disableUnderline: true}} {...props} />
))(({theme}) => ({
    "& label": {
        color: '8E8E8E',
        fontSize: "85%"
    },
    '& label.Mui-focused': {
        color:'#4F4F4F'
    },
    '& .MuiFilledInput-root': {
        fontFamily: 'Noto Sans KR',
        fontSize: '90%',
        border: '1px solid #C6C6C6',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: "#fcfcfb",
        transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow"
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            borderColor: '#4F4F4F'
        },
    }
}));


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
            method: "GET", headers: {
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
            method: "POST", headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data)
        })).json();
        return response;
    }
    const formik = useFormik({
        initialValues: {
            name: '', password: '', content: '',
        }, validationSchema: Validation, onSubmit: (values, {resetForm}) => {
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

    return (<div>
            <IconButton onClick={handleClickOpen}>
                <AddCircleRoundedIcon sx={{fontSize: 50, color: "#FF625B"}}/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} style={{fontFamily: 'Noto Sans KR'}}>
                <DialogContent>
                    <DialogTitle sx={{m: 0, p: 2, fontWeight: '500'}}>
                        <div style={{fontSize: '80%', fontWeight: '700'}}>축하 메시지 작성</div>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500]
                            }}
                        >
                            <CloseIcon style={{fontSize: 'medium'}}/>
                        </IconButton>
                    </DialogTitle>
                    <Box
                        component="form"
                        sx={{
                            display: "grid",
                            gap: 2
                        }}
                        onSubmit={handleSubmit}
                    >
                        <RedditTextField
                            required
                            label="이름"
                            id="=name"
                            variant="filled"
                            size={"small"}
                            name={"name"}
                            value={values.name}
                            error={touched.name && Boolean(errors.name)}
                            onChange={handleChange}
                        />
                        <RedditTextField
                            required
                            label="비밀번호"
                            id="password"
                            variant="filled"
                            size={"small"}
                            type={"password"}
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            onChange={handleChange}
                            helperText={touched.password && errors.password}
                        />
                        <RedditTextField
                            required
                            label="내용"
                            id="content"
                            variant="filled"
                            size={"small"}
                            multiline
                            rows={3}
                            value={values.content}
                            error={touched.content && Boolean(errors.content)}
                            onChange={handleChange}
                            helperText={touched.content && errors.content}
                        />
                    </Box>
                </DialogContent>
                <DialogActions style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    verticalAlign: 'center',
                    paddingBottom: '5%'
                }}>
                    <div>
                        <Button onClick={handleSubmit}>등록</Button>
                    </div>
                </DialogActions>
            </Dialog>
            <div>
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
