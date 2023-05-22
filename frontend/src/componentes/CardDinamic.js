import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src= "https://cdn.pixabay.com/photo/2017/07/10/10/06/integration-2489613_1280.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/foto-gratis/torre-manos-amigos-caucasicos-afroamericanos-juntos-al-aire-libre-dia-soleado-primavera_8353-10127.jpg?w=740&t=st=1684542078~exp=1684542678~hmac=0f4ee313832a5235dfd06c3bda8279c9ed8dcd592cda61e0a5810f2568f52d6f"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/vector-premium/sdgs-conjunto-etiquetas-objetivos-desarrollo-17-colores-predeterminados-tipo-etiqueta_180401-6357.jpg?w=826"/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

