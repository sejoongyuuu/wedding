/*global kakao*/
import React, {useEffect} from "react";

const MapComponent = () => {

    useEffect(() => {
        const mapContainer = document.getElementById("map");
        let mapOption = {
            center: new kakao.maps.LatLng(37.50961746196608, 127.05947919675475), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
            mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
        };
        // 지도를 생성한다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 지도에 마커를 생성하고 표시한다
        let marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(37.50961746196608, 127.05947919675475), // 마커의 좌표
            map: map // 마커를 표시할 지도 객체
        });
        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var content = '<div class="customoverlay">' +
            '  <a href="https://map.kakao.com/?itemId=8229296" target="_blank">' +
            '    <span class="title">소노펠리체 컨벤션</span>' +
            '  </a>' +
            '</div>';

// 커스텀 오버레이가 표시될 위치입니다
        var position = new kakao.maps.LatLng(37.50961746196608, 127.05947919675475);

// 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        });
    }, []);

    return (
        <div className="mapDiv">
            <div id="map" style={{width: "85%", height: "300px"}}/>
        </div>
    )
};

export default MapComponent;