import * as React from "react";
import {useState} from "react";
import styles from '../../styles/comment.module.css';
import Grid from "@mui/material/Grid";
import {
    Button,
    Dimmer,
    Divider,
    Input,
    Label,
    Loader,
    Modal,
    Segment
} from "semantic-ui-react";
import {Avatar, Box, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

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
        if (target.password === password || password === 'admin0918') {
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
            {loading ? <Segment>
                    <Dimmer active inverted>
                        <Loader size='small'>Loading</Loader>
                    </Dimmer>
                </Segment> :
                <div>
                    <div className={styles.commentListContainer}>
                        {comments.map(comment => (
                            <div key={comment._id}>
                                <Box sx={{flexGrow: 1, overflow: 'hidden', px: 1, padding: '3%'}}
                                     className={styles.comment}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={2} style={{
                                            margin: 'auto'
                                        }}>
                                            <div style={{display: 'flex', verticalAlign: 'top'}}>
                                                <Avatar
                                                    sx={{
                                                        width: 30,
                                                        height: 30,
                                                        fontSize: '95%',
                                                        fontWeight: '500',
                                                        backgroundColor: '#ffd60b'
                                                    }}
                                                >{comment.name.substring(0, 1)}</Avatar>
                                            </div>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Grid item xs={12}>
                                                <span className={styles.name}>{comment.name}</span>
                                                <span className={styles.date}>· {comment.createdDate.toString()}</span>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <span className={styles.content}>{comment.content}</span>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1} style={{textAlign: 'right', margin: 'auto'}}>
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
                        <Modal
                            size='mini'
                            open={open}
                            onClose={handleClose}
                        >
                            <Modal.Header>메시지 삭제</Modal.Header>
                            <Modal.Content>
                                <p>삭제하시려면 비밀번호를 입력해주세요.</p>
                                <Input size='mini' placeholder='비밀번호'
                                       value={password}
                                       onChange={handleChange}
                                       name={password}
                                /><br/>
                                {invalid &&
                                    <Label basic color='red' pointing>
                                        비밀번호가 일치하지 않습니다.
                                    </Label>
                                }
                            </Modal.Content>
                            <Modal.Actions>
                                <div className={styles.buttonGroup_2}>
                                    <Button circular icon='cancel' size='tiny' onClick={handleClose}
                                            style={{marginRight: '3%'}}/>
                                    <Button circular icon='trash alternate' size='tiny' color="red" onClick={handleConfirm}/>
                                </div>
                            </Modal.Actions>
                        </Modal>
                    </div>
                </div>
            }
        </>
    )
}