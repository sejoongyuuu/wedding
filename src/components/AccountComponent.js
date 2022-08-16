import * as React from 'react';
import {styled, ThemeProvider, createTheme} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, Divider} from "semantic-ui-react";
import {useRef} from "react";

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
    border: '1px solid #E8D0BE',
    backgroundColor: '#F9F2ED',
    '&:not(:last-child)': {}, '&:before': {
        display: 'none',
    }, marginBottom: '2%'
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />))(({}) => ({
    color: '#424242',
    fontWeight: '500',
    '& .MuiAccordionSummary-content': {
        paddingLeft: '10%',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    paddingTop: '5%',
    fontSize: '95%',
    paddingLeft: '10%'
}));

export default function AccountComponent() {
    const handleClick = e => {
        console.log(e.target.innerText);
        navigator.clipboard.writeText(e.target.innerText).then(alert('복사되었습니다! ' + e.target.innerText));
    }
    return (
        <div className="accountSection">
            <div style={{paddingBottom: '3%'}}>* 계좌번호를 터치하면 복사됩니다 *</div>
            <ThemeProvider theme={theme}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="font">
                            신랑 측 계좌번호 보기</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="fontDetail">
                            <div>
                                <div className="regular">신랑 김세중</div>
                                국민은행 <span style={{letterSpacing: '0.5px'}}
                                           onClick={handleClick}>852501-04-198554</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신랑 부 김용석
                                </div>
                                국민은행 <span style={{letterSpacing: '0.5px'}} onClick={handleClick}>210-24-0626-360</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신랑 모 김난주
                                </div>
                                국민은행 <span style={{letterSpacing: '0.5px'}}
                                           onClick={handleClick}>444402-01-361184</span>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="font">
                            신부 측 계좌번호 보기</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="fontDetail">
                            <div>
                                <div className="regular">신부 최유정</div>
                                우리은행 <span style={{letterSpacing: '0.5px'}} onClick={handleClick}>1002-756-471511</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신부 부 최성대
                                </div>
                                농협은행 <span style={{letterSpacing: '0.5px'}}
                                           onClick={handleClick}>302-0562-9216-11</span>
                            </div>
                            <Divider/>
                            <div>
                                <div className="regular">신부 모 백순조
                                </div>
                                국민은행 <span style={{letterSpacing: '0.5px'}}
                                           onClick={handleClick}>444401-04-064755</span>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>);
}