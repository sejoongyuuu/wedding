import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheets} from "@mui/styles";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

/*
MyDocument.getInitialProps = async ctx => {
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => materialSheets.collect(<App {...props} />)
        });

    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: <>{initialProps.styles}</>
    };
};*/
