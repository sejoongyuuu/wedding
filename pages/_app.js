import React from 'react';
import '../styles/global.css'
import '../public/static/fonts/fonts.css'

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
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default MyApp
