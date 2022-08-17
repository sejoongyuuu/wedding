import * as React from 'react';
import {styled, ThemeProvider, createTheme} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, Divider} from "semantic-ui-react";
import styles from '../../styles/contact.module.css';

const theme = createTheme();

theme.typography.font = {
    textAlign: 'left',
};

theme.typography.fontDetail = {
    textAlign: 'left',
};


const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />))(({theme}) => ({
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'transparent',
    '&:not(:last-child)': {}, '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />))(({}) => ({
    color: '#4b4b4b',
    height: '5%',
    fontWeight: '400',
    fontSize: '100%',
    marginRight: '20%',
    marginLeft: '20%',
    borderBottom: '1px solid #D4D4D4',
    '& .MuiAccordionSummary-content': {
        '& Mui-expanded':{
            color: '#5BB372'
        }
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    paddingTop: '5%',
    fontSize: '95%',
    paddingLeft: '10%'
}));

export default function AccountComponent() {
    const handleClick = e => {
        e.preventDefault()
        e.clipboardData.setData("Text", e.target.innerText).then(alert("계좌번호가 복사되었습니다. "));
    }
    return (
        <div className={styles.accountSection}>
            <ThemeProvider theme={theme}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: '#5BB372'}}/>}
                    >
                        <Typography variant="font" style={{textAlign: 'center'}}>
                            신랑 측 계좌번호 보기</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="fontDetail">
                            <div>
                                <div className="regular">신랑 · 김세중</div>
                                국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>852501-04-198554</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신랑 부 · 김용석
                                </div>
                                국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>210-24-0626-360</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신랑 모 · 김난주
                                </div>
                                국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>444402-01-361184</span>
                            </div>
                            <Divider/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: '#5BB372'}}/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="font">
                            신부 측 계좌번호 보기</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="fontDetail">
                            <div>
                                <div className="regular">신부 · 최유정</div>
                                우리은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>1002-756-471511</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신부 부 · 최성대
                                </div>
                                농협은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>302-0562-9216-11</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신부 모 · 백순조
                                </div>
                                국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>444401-04-064755</span>
                            </div>
                            <Divider/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>);
}