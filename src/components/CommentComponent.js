import {useEffect, useState} from "react";
import * as React from 'react';
import {useFormik} from "formik";
import {Validation} from "../../util/validation";
import Pagination from "./Pagination";
import CommentList from "./CommetList"
import 'semantic-ui-css/semantic.min.css'
import {Button, Container, Divider, Form, Icon, Input, Label, TextArea} from "semantic-ui-react";
import styles from '../../styles/comment.module.css'


export default function CommentComponent() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage, setCommentsPerPage] = useState(5);

    const [open, setOpen] = React.useState(false);


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
    const totalPages = Math.ceil(totalCount / commentsPerPage);

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
        },
    });

    useEffect(() => {
        getComments().then(response => console.log(response));
    }, []);
    const {values, touched, errors, handleChange, handleSubmit} = formik;

    return (
        <div>
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
            <Divider/>
            <div>
                <Container style={{margin: 20, paddingLeft: '5%', paddingRight: '5%'}}>
                    {/* <span className={styles.title}>축하 메시지 작성</span><Icon name='comment alternate outline'/>*/}
                    <Form size={'tiny'}>
                        <div className={styles.alignLeft}>
                            <Form.Group widths='equal'>
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
                                    control={Input}
                                    label='Password'
                                    placeholder='비밀번호'
                                    name={"password"}
                                    value={values.password}
                                    error={touched.password && Boolean(errors.password)}
                                    onChange={handleChange}
                                    helperText={touched.password && errors.password}
                                />
                            </Form.Group>
                            <Form.Field
                                control={TextArea}
                                label='Content'
                                placeholder='내용을 입력해주세요.'
                                name={"content"}
                                value={values.content}
                                error={touched.content && Boolean(errors.content)}
                                onChange={handleChange}
                                helperText={touched.content && errors.content}
                            />
                        </div>
                        <Form.Group widths='equal' className={styles.buttonGroup}>
                            <Button circular icon='cancel' size='tiny' onClick={handleClose}
                                    style={{marginRight: '3%'}}/>
                            <Button circular icon='checkmark' size='tiny' color="red" onClick={handleSubmit}/>
                        </Form.Group>
                    </Form>
                </Container>
                <Divider/>
            </div>
        </div>
    )
}
