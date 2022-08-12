import {useEffect, useState} from "react";
import * as React from 'react';
import {useFormik} from "formik";
import {Validation} from "../../util/validation";
import Pagination from "./Pagination";
import CommentList from "./CommetList"
import 'semantic-ui-css/semantic.min.css'
import {Button, Container, Divider, Form, Icon, Input, Label, Radio, TextArea} from "semantic-ui-react";
import styles from '../../styles/comment.module.css'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {IconButton} from "@mui/material";


export default function CommentComponent() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage, setCommentsPerPage] = useState(5);

    const [open, setOpen] = React.useState(false);

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
            name: '', password: '', content: '', avatar: ''
        }, validationSchema: Validation, onSubmit: (values, {resetForm}) => {
            resetForm({});
            createComment(values).then(res => {
                console.log(res);
                getComments().then();
                handleClick();
            });
        },
    });

    const handleClick = () => {
        setOpen(!open);
    }

    useEffect(() => {
        getComments().then(response => console.log(response));
    }, []);
    const {values, touched, errors, handleChange, handleSubmit} = formik;
    return (
        <div>
            <div>
                <IconButton onClick={handleClick} >
                    <AddCircleRoundedIcon sx={{fontSize: 40, color: "#5bb372"}}/>
                </IconButton>
                {open &&
                    <div style={{backgroundColor: '#e8e8e8'}}>
                        <Divider/>
                        <Container style={{margin: 20, padding: '5%', backgroundColor: '#ffffff'}}>
                            <Form size={'tiny'}>
                                <div className={styles.alignLeft}>
                                    <Form.Field>{values.avatar}</Form.Field>
                                    <Form.Field
                                        control={Input}
                                        label='Name'
                                        placeholder='이름'
                                        name={"name"}
                                        value={values.name}
                                        error={touched.name && Boolean(errors.name) && {
                                            content: '이름을 입력해주세요',
                                            pointing: 'below',
                                        }}
                                        onChange={handleChange}
                                    />
                                    <Form.Field
                                        control={TextArea}
                                        rows={2}
                                        label='Content'
                                        placeholder='내용'
                                        name={"content"}
                                        value={values.content}
                                        error={touched.content && Boolean(errors.content)&& {
                                            content: '내용을 입력해주세요',
                                            pointing: 'below',
                                        }}
                                        onChange={handleChange}
                                        helperText={touched.content && errors.content}
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Password'
                                        placeholder='비밀번호'
                                        name={"password"}
                                        value={values.password}
                                        error={touched.password && Boolean(errors.password)&& {
                                            content: '비밀번호를 입력해주세요',
                                            pointing: 'below',
                                        }}
                                        onChange={handleChange}
                                        helperText={touched.password && errors.password}
                                    />

                                </div>
                                <Form.Group widths='equal' className={styles.buttonGroup}>
                                    <Button circular icon='write' size='small' onClick={handleSubmit}/>
                                </Form.Group>
                            </Form>
                        </Container>
                        <Divider/>
                    </div>
                }
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
