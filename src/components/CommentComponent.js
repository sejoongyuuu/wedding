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
            <div style={{width: '40%', margin: 'auto'}}>
                <div>
                    <Image src={message} alt="" width="734" height="209"/>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}  style={{fontFamily: 'Noto Sans KR'}}>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{flexGrow: 1}}
                        onSubmit={handleSubmit}
                    >
                        <DialogTitle sx={{m: 0, p: 2, fontWeight: '500'}}>
                            <div style={{fontSize: '80%', fontWeight: '700'}}>방명록 작성</div>
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
                        <CssTextField
                            required
                            margin="dense"
                            name={"name"}
                            label={"이름"}
                            id="custom-css-outlined-input"
                            size={"small"}
                            value={values.name}
                            error={touched.name && Boolean(errors.name)}
                            onChange={handleChange}
                            helperText={touched.name && errors.name}
                            InputProps={{style: {fontSize: "90%"}}}
                            InputLabelProps={{style: {fontSize: "90%"}}}
                        />
                        <CssTextField
                            required
                            margin="dense"
                            type={"password"}
                            name={"password"}
                            label={"비밀번호"}
                            id="custom-css-outlined-input"
                            size={"small"}
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            onChange={handleChange}
                            helperText={touched.password && errors.password}
                            InputProps={{style: {fontSize: "90%"}}}
                            InputLabelProps={{style: {fontSize: "90%"}}}
                        />
                        <CssContentsField
                            required
                            variant="standard"
                            margin="dense"
                            multiline
                            rows={3}
                            name={"content"}
                            label={"내용"}
                            id="custom-css-outlined-input"
                            size={"small"}
                            value={values.content}
                            error={touched.content && Boolean(errors.content)}
                            onChange={handleChange}
                            helperText={touched.content && errors.content}
                            InputProps={{style: {fontSize: "90%"}}}
                            InputLabelProps={{style: {fontSize: "90%"}}}
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
