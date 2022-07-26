import Calendar from "../components/Calendar";
import styles from '../../styles/calendar.module.css';
import Fade from 'react-reveal/Fade';

export default function CalendarContainer() {
    return (
        <>
            <Fade bottom>
                <div>
                    <div className='titleDiv'>The Wedding Day</div>
                    <div className={styles.date}>9월 18일 일요일 오후 3시</div>
                </div>
                <div style={{width: '90%', margin: 'auto'}}>
                    <Calendar/>
                </div>
            </Fade>
        </>
    )
}