function onImageLoaded(url, cb) {
  let image = new Image();
  image.src = url;
  if (image.complete) {
    cb(image);
  } else {
    image.onload = function () {
      cb(image);
    };
  }
}

function checkImgOnload() {
  const panoramaSection = document.querySelector(".panorama-container");
  let image = new Image();
  image.onload = function () {
    onImageLoaded(`${image.src}`, function () {
      panoramaSection.innerHTML = `<img src="${image.src}" data-width="${image.width}" data-height="${image.height}" alt="Panorama">`;
    });
    $(".panorama-view").panorama360({
      sliding_controls: false,
      bind_resize: true,
    });
  };
  if (innerWidth <= 768) {
    image.src = "images/mobile/s4/sec4img01.jpg";
  } else {
    image.src = "images/desktop/s4/sec4img01.jpg";
  }
}

$(document).ready(function () {
  checkImgOnload();

  // 顯示提示
  // if (window.innerWidth <= 768) {
  //   $('#Sec4 .toast').addClass('active');
  //   setTimeout(() => {
  //     $('#Sec4 .toast').removeClass('active');
  //   }, 2 * 1000);
  // }

  const swiper_1 = new Swiper('#swiper_1', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper_2 = new Swiper('#swiper_2', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper_3 = new Swiper('#swiper_3', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper_4 = new Swiper('#swiper_4', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper_5 = new Swiper('#swiper_5', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 48,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },
  });

  window.addEventListener("resize", function () {
    setTimeout(function () {
      this.location.reload();
    });
  });
});