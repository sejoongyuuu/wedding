import CommentComponent from "../components/CommentComponent";
import styles from '../../styles/comment.module.css';
import * as React from "react";
import Fade from 'react-reveal/Fade';

export default function CommentContainer() {
    return (
        <div className={styles.container}>
            <Fade bottom>
                <CommentComponent/>
            </Fade>
        </div>
    );
}