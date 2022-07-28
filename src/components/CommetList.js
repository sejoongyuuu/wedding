import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import * as React from "react";
import {useState} from "react";

export default function CommentList(props) {
    const {loading, comments, getComments} = props;

    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [tobeDelete, setTobeDelete] = useState(null);
    const [invalid, setInvalid] = useState(false);

    const handleClickOpen = (comment) => {
        setTobeDelete(comment);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = e => {
        setPassword(e.target.value);
    }
    const handleConfirm = () => {
        if (tobeDelete.password === password) {
            deleteComment(tobeDelete._id).then(r =>
                getComments());
            setTobeDelete(null);
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
                    <div>
                        {comments.map(comment => (
                            <div key={comment._id}>
                                {comment.name} : {comment.content}<br/>
                                {comment.createdDate}
                                <Button variant="outlined" onClick={() => handleClickOpen(comment)}>
                                    delete
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>방명록 삭제</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    삭제하시려면 비밀번호를 입력해주세요.
                                </DialogContentText>
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