import * as React from "react";
import {useState} from "react";
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField
} from "@mui/material";
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../../styles/comment.module.css';
import Grid from "@mui/material/Grid";
import {Container, Divider, Icon, List} from "semantic-ui-react";

const CssTextField = styled(TextField)({
    fontFamily: 'Noto Sans KR', width: "40%", paddingRight: "2%", '& label.Mui-focused': {
        color: '#38c7a7',
    }, '& .MuiInput-underline:after': {
        borderBottomColor: '#38c7a7',
    }, '& .MuiOutlinedInput-root': {
        '& fieldset': {}, '&.Mui-focused fieldset': {
            borderColor: '#38c7a7',
        },
    },
});
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
    return (
        <>
            {loading ? <Icon loading name='spinner'/> :
                <div>
                    <div className={styles.commentListContainer}>
                        {comments.map(comment => (
                            <div key={comment._id}>
                                <Box sx={{flexGrow: 1, overflow: 'hidden', px: 1}} className={styles.comment}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={2} style={{margin:'auto'}}>
                                            <Avatar
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    fontSize: '85%',
                                                    fontWeight: '700'
                                                }}
                                            >{comment.name.substring(0, 1)}</Avatar>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Grid item xs={12}>
                                                <span className={styles.name}>{comment.name}</span>
                                                <span className={styles.content}>{comment.content}</span>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={styles.date}>{comment.createdDate.toString()}</div>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1} style={{textAlign: 'right', margin:'auto'}}>
                                            <IconButton onClick={() => handleClickOpen(comment)}>
                                                <CloseIcon style={{fontSize: 'small'}}/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Divider fitted/>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Dialog open={open} onClose={handleClose} style={{fontFamily: 'Noto Sans KR'}}>
                            <div className={styles.dialog}><span className="medium">축하 메시지 삭제</span></div>
                            <DialogContent>
                                <div>
                                    삭제하시려면 비밀번호를 입력해주세요.
                                </div>
                                <CssTextField
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