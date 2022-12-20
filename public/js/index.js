const elm = document.getElementById('sec1');
const elm2 = document.getElementById('sec2');
let scrSw1 = false;
let scrSw2 = false;

const durationScrollTo = (y, duration = 500) => {
  const stepY = (y - window.scrollY) / duration;
  const currentY = window.scrollY;
  const startTime = new Date().getTime();

  const scrollInterval = setInterval(() => {
    const now = new Date().getTime() - startTime;

    window.scrollTo({
      top: currentY + (stepY * now)
    });

    if (duration <= now) {
      clearInterval(scrollInterval);
    }
  }, 1);
};


window.addEventListener('scroll', function () {
  const introCon = document.querySelector('article.firstArt');

  const offY = window.pageYOffset;
  if (scrSw1 == false && offY > 0) {
    // window.scrollTo({top:elm2.offsetTop,left:0,behavior:'smooth'});
    durationScrollTo(elm2.offsetTop);
    scrSw1 = true;
    setTimeout(() => {
      scrSw2 = true;
    }, 500)

  } else if (scrSw2 == true && offY < elm2.offsetTop) {
    // window.scrollTo({top:0,left:0,behavior:'smooth'});
    durationScrollTo(0);
    scrSw2 = false;
    setTimeout(() => {
      scrSw1 = false;
    }, 500)
  }

  introCon.style.transform=`translateY(${window.scrollY/4}px)`


});

const sec1BackSwiper = new Swiper('.videoSwiper', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove:false,

});
const imgWrapSwiper = new Swiper('.imgwrapS', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  allowTouchMove:false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
const con2Swiper = new Swiper('.con3Swiper', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  allowTouchMove:false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const img1Swiper = new Swiper('.imgS1', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove:false,

});
const img2Swiper = new Swiper('.imgS2', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove:false,

});
const img3Swiper = new Swiper('.imgS3', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove:false,

});
const img4Swiper = new Swiper('.imgS4', {
  // Optional parameters
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove:false,

});

const sec1ConSwiper = new Swiper('.con1Swiper', {
  // Optional parameters
  // spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove:false,
});
const sec2ConSwiper = new Swiper('.con2Swiper', {
  // Optional parameters
  // spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  allowTouchMove:false,
  navigation: {
    nextEl: ".nextWrap",
    prevEl: ".prevWrap",
  },
});


var windowWidth = window.matchMedia("screen and (max-width: 768px)");
if (windowWidth.matches) {
  //screen and (max-width: 768px)에 해당한다.
  sec2ConSwiper.allowTouchMove=true;
} else {
  //screen and (max-width: 768px)에 해당하지 않는다.
  sec2ConSwiper.allowTouchMove=false;
}

window.addEventListener('resize',()=>{

  if (windowWidth.matches) {
    //screen and (max-width: 768px)에 해당한다.
    sec2ConSwiper.allowTouchMove=true;
} else {
    //screen and (max-width: 768px)에 해당하지 않는다.
    sec2ConSwiper.allowTouchMove=false;
}
})


