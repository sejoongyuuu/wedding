import CommentComponent from "../components/CommentComponent";
import styles from '../../styles/comment.module.css';
import * as React from "react";

export default function CommentContainer() {
    return (

        <div className={styles.container}>
            <div className='titleDiv' style={{paddingBottom: '10%'}}>COMMENTS</div>
            <div className={styles.text}>
                세중 & 유정에게<br/>
                축하메시지를 남겨주세요!🥰
            </div>
            <CommentComponent/>
        </div>
    );
}