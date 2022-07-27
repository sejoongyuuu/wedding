import CommentComponent from "../components/CommentComponent";
import styles from '../../styles/comment.module.css';

export default function CommentContainer() {
    return (

        <div>
            <div className={styles.title}> 세중&유정에게 축하 메시지를 남겨주세요!</div>
            <CommentComponent styels={styles}/>
        </div>
    );
}