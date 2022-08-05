import CommentComponent from "../components/CommentComponent";
import styles from '../../styles/comment.module.css';
import message from '../../public/images/picture/message.PNG';
import Image from "next/image";

export default function CommentContainer() {
    return (

        <div className={styles.container}>
{/*            <div> 세중&유정에게 축하 메시지를 남겨주세요!</div>*/}
            <div style={{width: '60%', margin: 'auto'}}>
                <Image src={message}></Image>
            </div>
            <CommentComponent/>
        </div>
    );
}