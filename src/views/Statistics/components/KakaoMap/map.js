/*global kakao */
import React, { useEffect } from "react";
import $ from "jquery";

import Data from "./data.json";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center : new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 
      level: 14,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    // 마커 클러스터러를 생성합니다 
    let clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
      minLevel: 10, // 클러스터 할 최소 지도 레벨 
      calculator: [10, 30, 50], // 클러스터의 크기 구분 값, 각 사이값마다 설정된 text나 style이 적용된다
      texts: getTexts, // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다 
      styles: [{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
        width : '30px', height : '30px',
        background: 'rgba(51, 204, 255, .8)',
        borderRadius: '15px',
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: '31px'
      },
      {
        width : '40px', height : '40px',
        background: 'rgba(255, 153, 0, .8)',
        borderRadius: '20px',
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: '41px'
      },
      {
        width : '50px', height : '50px',
        background: 'rgba(255, 51, 204, .8)',
        borderRadius: '25px',
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: '51px'
      },
      {
        width : '60px', height : '60px',
        background: 'rgba(255, 80, 80, .8)',
        borderRadius: '30px',
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: '61px'
      }
    ]                
    });

    // 클러스터 내부에 삽입할 문자열 생성 함수입니다 
    function getTexts( count ) {
      // 한 클러스터 객체가 포함하는 마커의 개수에 따라 다른 텍스트 값을 표시합니다 
      if(count < 10) {
        return 'Caution';        
      } else if(count < 30) {
        return 'Warning';
      } else if(count < 50) {
        return 'Insufficient';
      } else {
        return 'Sufficient';
      }
    }

    // 데이터를 가져오기 위해 jQuery를 사용합니다
    // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
    $.get(Data, function(data) {
      // 데이터에서 좌표 값을 가지고 마커를 표시합니다
      // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
      let markers = $(data.positions).map(function(i, position) {
          return new kakao.maps.Marker({
              position : new kakao.maps.LatLng(position.lat, position.lng)
          });
      });

      // 클러스터러에 마커들을 추가합니다
      clusterer.addMarkers(markers);
    });

  };

  return <div id="map" style={{height: '60vh', width: '100%'}}></div>;
}