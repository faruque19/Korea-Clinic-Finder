import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.5665, 126.9780),
      level: 5,
    };
    new window.kakao.maps.Map(mapContainer, mapOption);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <div className="my-2">
        <button onClick={() => changeLanguage("en")} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">English</button>
        <button onClick={() => changeLanguage("bn")} className="px-3 py-1 bg-green-500 text-white rounded">বাংলা</button>
      </div>
      <div id="map" className="w-full h-[500px] border rounded"></div>
    </div>
  );
};

export default App;