import React, {useEffect} from "react";
import Script from "next/script";
import Image from "next/image";


export default function KakaoShareButton() {

    useEffect(() => {
        const mapScript = document.createElement("script");

        mapScript.async = true;
        mapScript.src = "https://developers.kakao.com/sdk/js/kakao.js";

        document.head.appendChild(mapScript);
        const share = () => {
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APPKEY);
            window.Kakao.Share.createCustomButton({
                container: '#kakaotalk-sharing-btn',
                templateId: parseInt(process.env.NEXT_PUBLIC_TEMPLATE_ID),
            });
        }
        mapScript.addEventListener("load", share);
        return () => mapScript.removeEventListener("load", share);
    }, []);

    return (
        <>
            <Script src="//developers.kakao.com/sdk/js/kakao.min.js"></Script>
            <a id="kakaotalk-sharing-btn" href="javascript:;">
                <img
                    src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_small.png"
                />
            </a>
        </>
    )
}