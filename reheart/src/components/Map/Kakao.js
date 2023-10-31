import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/search.svg";
import localData from "../../data/data.json";

function Kakao() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [onChecked, setOnChecked] = useState(false);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.542268, 126.967049),
      level: 3,
    };

    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);
    setMyData(localData.data);
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      throw new Error("위치 정보가 지원되지 않습니다.");
    }
  };

  const success = ({ coords, timestamp }) => {
    const latitude = coords.latitude;
    const longitude = coords.longitude;

    for (let i = 0; i < 5000; i++) {
      const tmplat = latitude - myData[i].wgs84lat;
      const tmplong = longitude - myData[i].wgs84lon;

      // Absolute value for latitude and longitude differences
      const tmpSer = Math.abs(tmplat) + Math.abs(tmplong);

      if (onChecked === true) {
        setMarkers([]);
        setOnChecked(false);
      }
      if (tmpSer < 20) {
        const markerPosition = new window.kakao.maps.LatLng(myData[i].wgs84lat, myData[i].wgs84lon);
        setOnChecked(true);
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: markerPosition,
          title: myData[i].buildplace,
        });
        setMarkers((prevMarkers) => [...prevMarkers, marker]);
      }
    }
  };

  const handleSearch = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
      // Close info windows associated with the markers
      marker.infowindow.close();
    });
    setMarkers([]);

    if (searchKeyword.trim() !== "" && map !== null) {
      for (let i = 0; i < 5000; i++) {
        const stringVal = myData[i].buildaddress;
        if (stringVal.includes(searchKeyword)) {
          const markerPosition = new window.kakao.maps.LatLng(
            myData[i].wgs84lat,
            myData[i].wgs84lon
          );
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: markerPosition,
            title: myData[i].buildplace,
          });

          // Create an info window
          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="border: 1px solid #ff9b9b; border-radius: 5px; background-color: #fff5f5; padding: 10px;">
                        <strong>${myData[i].buildplace}</strong><br>
                        ${myData[i].buildaddress}
                      </div>`,
          });

          // Add a mouseover event to show the info window on marker hover
          window.kakao.maps.event.addListener(marker, "mouseover", function () {
            infowindow.open(map, marker);
          });

          // Add a mouseout event to close the info window on marker mouseout
          window.kakao.maps.event.addListener(marker, "mouseout", function () {
            infowindow.close();
          });

          marker.infowindow = infowindow; // Save the info window with the marker

          setMarkers((prevMarkers) => [...prevMarkers, marker]);
        }
      }
    }
  };


  useEffect(() => {
    getUserLocation();
  }, []); // Call once on component mount

  return (
    <div style={{ position: "relative" }}>
      <div style={{
          position: "absolute",
          top: "150px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          border: "1px solid #FF9B9B",
          borderRadius: "5px",
        }}>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="주소를 입력하세요"
          style={{
            width: "1000px",
            height: "30px",
            marginRight: "10px",
            border: "none",
            padding: "5px",
            borderRadius: "5px",
          }}
        />
        <button onClick={handleSearch}
        
          style={{
            height: "40px", // 입력 필드 높이에 맞게 조정
            width: "40px", // 버튼의 가로 크기를 명시적으로 설정
            color: "transparent",
            cursor: "pointer",
            backgroundImage: `url(${searchIcon})`,
            backgroundSize: "cover", // 이미지가 버튼을 완전히 채우도록
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "none",
            backgroundColor: "#fff5f5",
            borderRadius: "0px 5px 5px 0px",
          }}>Search</button>
      </div>
      <div id="map" style={{ width: "100%", height: "800px" }}></div>
    </div>
  );
}

export default Kakao;
