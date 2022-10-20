/*global kakao*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

async function getUsers() {
  const response = await axios.get(
    "https://www.data.go.kr/data/15001698/openapi.do"
  );
  console.log(response);
  return response.data;
}

const App = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), //자신이 원하는 위도 경도
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" className="Map"></div>
    </div>
  );
};

export default App;
