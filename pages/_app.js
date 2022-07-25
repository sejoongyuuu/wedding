import React from 'react';
import '../styles/globals.css'
import CssBaseline from "@mui/material/CssBaseline";

function MyApp(props) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default MyApp
