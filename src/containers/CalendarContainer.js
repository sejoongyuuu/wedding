import Calendar from "../components/Calendar";
import styles from '../../styles/calendar.module.css';

export default function CalendarContainer() {
    return (
        <>
            <div>
                <div className={styles.eng}>September 18th</div>
                <div className={styles.date}>9월 18일 일요일 오후 3시</div>
            </div>
            <Calendar/>
        </>
    )
}