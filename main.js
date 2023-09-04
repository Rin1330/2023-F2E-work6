
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
import './node_modules/swiper/swiper.min.css';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import * as bootstrap from 'bootstrap';
import './assets/scss/all.scss';

document.addEventListener('DOMContentLoaded', function(){

  setTimeout(() => {
    document.querySelector('body').classList.add('show')
  }, 100);
  const swiper = new Swiper('.swiperBanner', {
    allowTouchMove: false,
    //能呈現幾個.swiper-slide
    slidesPerView: "auto",
    //跑馬燈的速度(毫秒)
    speed: 10000,
    //是否重複
    loop: true,
    autoplay: {
      //到下一個幻燈片時，停下的時間
      delay: 0,
      //避免點擊造成跑馬燈失效，視情況增加
      disableOnInteraction: false
    }
  })
})

