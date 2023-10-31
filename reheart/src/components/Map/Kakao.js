import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/search.svg";
import localData from "../../data/data.json"; // 로컬 데이터를 임포트합니다.

function Kakao() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [searchResult, setSearchResult] = useState([]); // 검색 결과 상태를 추가합니다.

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.542268, 126.967049),
      level: 3,
    };

    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);
    setSearchResult(localData);
  }, []);

  const handleSearch = () => {
    if (searchKeyword.trim() !== "" && map !== null) {
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(searchKeyword, function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          // Clear previous markers
          markers.forEach((marker) => marker.setMap(null));

          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new window.kakao.maps.Marker({
            position: coords,
            map: map,
          });
          setMarkers([marker]);

          map.setCenter(coords);
        } else {
          // 사용자 경험을 개선하기 위한 커스텀 모달이나 메시지를 고려해 볼 수 있습니다.
          console.error("검색 결과가 없습니다.");
        }
      });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
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
        }}
      >
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
        <button
          onClick={handleSearch}
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
          }}
        >
          Search
        </button>
      </div>
      <div id="map" style={{ width: "100%", height: "800px" }}></div>
    </div>
  );
}

export default Kakao;
