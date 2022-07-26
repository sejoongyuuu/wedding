import * as React from 'react';
import {styled, ThemeProvider, createTheme} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    boxShadow: '1px 1px 3px #CCCCCC',
    backgroundColor: '#FFFFF',
    '&:not(:last-child)': {
        borderBottom: 0,
    }, '&:before': {
        display: 'none',
    }, marginBottom: '2%'
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />))(({}) => ({
    '& .MuiAccordionSummary-content': {
        paddingLeft: '5%',
        fontWeight: '400'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    paddingTop: '5%',
    fontSize: '95%',
}));

export default function AccountComponent() {
    return (
        <div className="accountSection">
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
                                <div className="fontRegular" style={{paddingRight: '3%'}}>신부 최유정</div>
                                우리은행 <span style={{letterSpacing: '0'}}>1002-756-471511 </span>
                            </div>
                            <div>
                                <div className="fontRegular" style={{paddingRight: '3%', paddingTop: '3%'}}>신부 최유정
                                </div>
                                우리은행 <span style={{letterSpacing: '0'}}>1002-756-471511 </span>
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

                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>);
}