import CommentComponent from "../components/CommentComponent";
import styles from '../../styles/comment.module.css';
import * as React from "react";

export default function CommentContainer() {
    return (
        <div className={styles.container}>
            <div className="titleDiv">
                Guest Book
            </div>
            <CommentComponent/>
        </div>
    );
}