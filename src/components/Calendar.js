import {useState} from "react";
import moment from "moment";
import {Box, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    head: {
        fontFamily: 'S-CoreDream',
        color: '#676767',
        display: "flex", justifyContent: "center", alignItems: "center",
        fontSize: '90%', textAlign: "center", width: 30, height: 30, fontWeight: '500'
    },
    body: {
        fontFamily: 'S-CoreDream',
        display: "flex", justifyContent: "center", alignItems: "center",
        fontSize: '95%', textAlign: "center", width: 30, height: 30, fontWeight: '300'
    },
    checkedDay: {
        backgroundColor: '#5BB372', color: '#ffffff !important', borderRadius: '100%', fontWeight: '500'
    },
    sunday: {color: '#ff4c29'},
    none: {visibility: 'hidden'}

}));
export default function Calendar() {

    const [today] = useState(moment('2022-09-18'));
    const classes = useStyles();

    const getDate = () => {
        const startWeek = today.clone().startOf('month').week() >= 52 ? 0 : today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

        let calendar = [];

        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(
                Array(7).fill(0).map((n, i) => {
                    return today.clone().week(week).startOf('week').add(n + i, 'day')
                })
            )
        }
        return calendar.map((week, index) =>
            <Box key={index} display={"flex"} justifyContent={"space-between"}>
                {
                    week.map((day, index) => {
                        return (
                            <Box key={index}>
                                <Typography
                                    className={clsx(classes.body,
                                        {[classes.sunday]: index === 0},
                                        {[classes.checkedDay]: day.format('YYYYMMDD') === today.format('YYYYMMDD')},
                                        {[classes.none]: day.format('MM') !== today.format('MM')}
                                    )}
                                >
                                    {!day ? "" : day.format('D')}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        )
    }
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat'];
    const getWeek = () => {
        return week.map((day, index) => {
            return (
                <Box key={index}>
                    <Typography
                        className={clsx(classes.head,
                            {[classes.sunday]: index === 0},
                        )}
                    >
                        {day}
                    </Typography>
                </Box>
            )
        })
    }
    return (
        <Box py={2}>
            <Box px={4}>
                <Divider/>
                <Box>
                    <Box>
                        <Box>
                            <Box display={"flex"} justifyContent={"space-between"}>
                                {getWeek()}
                            </Box>
                        </Box>
                        <Box>
                            {getDate()}
                        </Box>
                    </Box>
                </Box>
                <Divider/>
            </Box>
        </Box>
    );
}