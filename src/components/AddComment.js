import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function addComment() {
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {

    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open}
                    onClose={handleClose}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        required
                        name={"name"}
                        label={"이름"}
                        placeholder={"이름"}
                    />
                    <TextField
                        required
                        type={"password"}
                        name={"password"}
                        label={"비밀번호"}
                        placeholder={"비밀번호"}
                    />
                    <TextField
                        required
                        name={"content"}
                        label={"내용"}
                        placeholder={"내용"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>등록</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}