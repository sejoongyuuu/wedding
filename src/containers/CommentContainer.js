import CommentComponent from "../components/CommentComponent";
import styles from '../../styles/comment.module.css';
import message from '../../public/images/picture/message.PNG';
import Image from "next/image";
import * as React from "react";
import {Divider} from "semantic-ui-react";

export default function CommentContainer() {
    return (

        <div className={styles.container}>
            <div className='titleDiv' style={{paddingBottom: '10%'}}>COMMENTS</div>
            <div style={{width: '60%', margin: 'auto'}}>
                <Image src={message}></Image>
            </div>
            <Divider/>
            <CommentComponent/>
        </div>
    );
}