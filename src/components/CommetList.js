import * as React from "react";
import {useState} from "react";
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent, Paper, Popper,
    TextField
} from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Fade from '@mui/material/Fade';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../../styles/comment.module.css';

export default function CommentList(props) {
    const {loading, comments, getComments} = props;

    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [target, setTarget] = useState(null);
    const [invalid, setInvalid] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popperOpen, setPopperOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement, comment) => (event) => {
        console.log("handleClick, comment=>" + comment)
        setTarget(comment);
        setAnchorEl(event.currentTarget);
        setPopperOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const handleClickOpen = (comment) => {
        console.log("handleClickOpen, comment=>" + comment)
        setInvalid(false);
        setPassword("");
        setPopperOpen(false);
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
        console.log(response.result);
        return response;
    }

    return (
        <>
            {loading ? <CircularProgress color="inherit"/> :
                <div>
                    <div className={styles.cardContainer}>
                        {comments.map(comment => (
                            <div key={comment._id}>
                                <Box sx={{
                                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                                }}>

                                    <Card sx={{maxWidth: 345}}
                                          style={{textAlign: 'left', margin: 'auto', marginBottom: '2%'}}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{bgcolor: red[500], fontFamily: 'Noto Sans KR'}}
                                                        aria-label="recipe">
                                                    {comment.name.substring(0, 1)}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton onClick={() => handleClickOpen(comment)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            }
                                            title={comment.name}
                                            subheader={comment.createdDate.toString()}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {comment.content}
                                            </Typography>
                                        </CardContent>{/*
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon/>
                                            </IconButton>
                                        </CardActions>*/}
                                    </Card>
                                </Box>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Dialog open={open} onClose={handleClose}>
                            <div className="medium">방명록 삭제</div>
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
                            <DialogActions>
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