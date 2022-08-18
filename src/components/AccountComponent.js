import * as React from 'react';
import {styled, ThemeProvider, createTheme} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../../styles/contact.module.css';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {useState} from "react";
import Button from "@mui/material/Button";
import {Divider} from "semantic-ui-react";

const theme = createTheme();

theme.typography.font = {
    textAlign: 'left',
};

theme.typography.fontDetail = {
    textAlign: 'left',
};

const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />))(({theme}) => ({
    marginLeft: '15%',
    marginRight: '15%',
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
    fontWeight: '500',
    fontSize: '100%',
    borderBottom: '1px solid #D4D4D4',
    '& .MuiAccordionSummary-content': {
        '& Mui-expanded': {
            color: '#5BB372'
        }
    },
}));

const ColorButton = styled(Button)(({theme}) => ({
    fontWeight: '400',
    fontSize: '90%',
    backgroundColor: '#696969',
    color: '#FFFFFF',
    height: 'auto',
    minWidth: '0',
    marginLeft: 'auto',
    padding: '0px 5px',
    "&:hover": {
        backgroundColor: "#696969",
        color: '#FFFFFF',
        fontWeight: '400',
        fontStyle: 'none'
    },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    paddingTop: '5%',
    fontSize: '95%',
}));

export default function AccountComponent() {
    const handleClick = () => {
        alert("계좌번호가 복사되었습니다.");
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
                                <span className="bold">김세중</span><span className="regular"> · 신랑 </span>
                                <div style={{display: 'flex'}}>
                                    <div>국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>852501-04-198554</span>
                                    </div>
                                    <CopyToClipboard text='852501-04-198554'>
                                        <ColorButton size='small' onClick={handleClick}>복사</ColorButton>
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <Divider/>
                            <div>
                                <span className="bold">김용석</span><span className="regular"> · 신랑 부</span>
                                <div style={{display: 'flex'}}>
                                    <div>국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>210-24-0626-360</span>
                                    </div>
                                    <CopyToClipboard text='210-24-0626-360'>
                                        <ColorButton size='small' onClick={handleClick}>복사</ColorButton>
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <Divider/>
                            <div>
                                <span className="bold">김난주</span><span className="regular"> · 신랑 모</span>
                                <div style={{display: 'flex'}}>
                                    <div>국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>444402-01-361184</span>
                                    </div>
                                    <CopyToClipboard text='444402-01-361184'>
                                        <ColorButton size='small' onClick={handleClick}>복사</ColorButton>
                                    </CopyToClipboard>
                                </div>
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
                                <span className="bold">최유정</span><span className="regular"> · 신부</span>
                                <div style={{display: 'flex'}}>
                                    <div>우리은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>1002-756-471511</span>
                                    </div>
                                    <CopyToClipboard text='1002-756-471511'>
                                        <ColorButton size='small' onClick={handleClick}>복사</ColorButton>
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <Divider/>
                            <div>
                                <span className="bold">최성대</span> <span className="regular"> · 신부 부</span>
                                <div style={{display: 'flex'}}>
                                    <div>농협은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>302-0562-9216-11</span>
                                    </div>
                                    <CopyToClipboard text='302-0562-9216-11'>
                                        <ColorButton size='small' onClick={handleClick}>복사</ColorButton>
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <Divider/>
                            <div>
                                <span className="bold">백순조</span><span className="regular"> · 신부 모</span>
                                <div style={{display: 'flex'}}>
                                    <div>국민은행&nbsp;&nbsp;<span style={{letterSpacing: '0.5px'}}>444401-04-064755</span>
                                    </div>
                                    <CopyToClipboard text='444401-04-064755'>
                                        <ColorButton size='small' onClick={handleClick}>복사</ColorButton>
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <Divider/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>);
}