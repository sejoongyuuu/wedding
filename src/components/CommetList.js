import * as React from "react";
import {useState} from "react";
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent, Paper, Popper,
    TextField
} from "@mui/material";
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../styles/comment.module.css';
import Grid from "@mui/material/Grid";
import {orange, pink} from "@mui/material/colors";

export default function CommentList(props) {
    const {loading, comments, getComments} = props;

    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [target, setTarget] = useState(null);
    const [invalid, setInvalid] = useState(false);

    const handleClickOpen = (comment) => {
        console.log("handleClickOpen, comment=>" + comment)
        setInvalid(false);
        setPassword("");
        setTarget(comment);
        setOpen(true);
    };

    const handleClose = () => {
        setInvalid(false);
        setPassword("");
        setOpen(false);
        setTarget(null);
    };
    const handleChange = e => {
        setPassword(e.target.value);
    }
    const handleConfirm = () => {
        console.log("handleConfirm => " + target)
        if (target.password === password) {
            deleteComment(target._id).then(r =>
                getComments());
            setTarget(null);
            setPassword("");
            setInvalid(false);
            handleClose();

        } else {
            setInvalid(true);
            setPassword("");
        }
    }

    const deleteComment = async (id) => {
        const response = await (await fetch("/api/comment", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: id})
        })).json();
        return response;
    }

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 3) - hash);
        }

        let color = '#';

        for (i = 0; i < comments.length; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    return (
        <>
            {loading ? <CircularProgress color="inherit"/> :
                <div>
                    <div className={styles.commentListContainer}>
                        {comments.map(comment => (
                            <div key={comment._id}>
                                <Box sx={{flexGrow: 1, overflow: 'hidden', px: 1}} className={styles.comment}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={2} style={{paddingTop:'2%'}}>
                                            <Avatar
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    fontSize: '80%',
                                                    fontWeight: '700'
                                                }}
                                            >{comment.name.substring(0, 1)}</Avatar>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Grid item xs={8}>
                                                <span className={styles.name}>{comment.name}</span>
                                                <span className={styles.content}>{comment.content}</span>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <div className={styles.date}>{comment.createdDate.toString()}</div>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1} style={{textAlign: 'right'}}>
                                            <IconButton onClick={() => handleClickOpen(comment)}>
                                                <CloseIcon style={{fontSize: 'small'}}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Dialog open={open} onClose={handleClose}>
                            <div className={styles.dialog}><span className="medium">방명록 삭제</span></div>
                            <DialogContent>
                                <div>
                                    삭제하시려면 비밀번호를 입력해주세요.
                                </div>
                                <TextField
                                    autoFocus
                                    type="password"
                                    margin="dense"
                                    id="name"
                                    variant="standard"
                                    value={password}
                                    onChange={handleChange}
                                />
                                {invalid && <div>비밀번호가 일치하지 않습니다.</div>}
                            </DialogContent>
                            <DialogActions style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                verticalAlign: 'center',
                                paddingBottom: '5%'
                            }}>
                                <Button onClick={handleConfirm}>확인</Button>
                                <Button onClick={handleClose}>취소</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            }
        </>
    )

}