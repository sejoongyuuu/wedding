import CommentComponent from "../components/CommentComponent";
import styles from '../../styles/comment.module.css';
import * as React from "react";
import Image from "next/image";

export default function CommentContainer() {
    return (

        <div className={styles.container}>
            <div className={styles.text}>
                세중 & 유정에게<br/>
                축하메시지를 남겨주세요!<Image src="/images/1f970.png" width={15} height={15}/>
            </div>
            <CommentComponent/>
        </div>
    );
}