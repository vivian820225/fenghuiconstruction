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
  if (innerWidth <= 768) {
    image.src = "images/s3/m-sec3img01.jpg";
  } else {
    image.src = "images/s3/sec3img01.jpg";
  }
  // image.src = "images/s3/sec3img01.jpg";
  console.log(image, image.width);
  image.onload = function () {
    onImageLoaded(`${image.src}`, function () {
      panoramaSection.innerHTML = `<img src="${image.src}" data-width="${image.width}" data-height="${image.height}" alt="Panorama">`;
    });
    $(".panorama-view").panorama360({
      sliding_controls: false,
      bind_resize: true,
    });
  };

}

$(document).ready(function () {
  // checkImgOnload();

  $(".panorama-view").panorama360({
    sliding_controls: false,
    bind_resize: true,
    start_position: 400
  });

  // 顯示提示
  // if (window.innerWidth <= 768) {
  //   $('#Sec4 .toast').addClass('active');
  //   setTimeout(() => {
  //     $('#Sec4 .toast').removeClass('active');
  //   }, 2 * 1000);
  // }

  const swiper1 = new Swiper('#swiper-1', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: "#swiper-1 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-1 .swiper-button-next',
      prevEl: '#swiper-1 .swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 0,
      },
      1024: {
        spaceBetween: 68,
      },
    },
  });

  const swiper2 = new Swiper('#swiper-2', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#swiper-2 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-2 .swiper-button-next',
      prevEl: '#swiper-2 .swiper-button-prev',
    },
  });

  const swiper4 = new Swiper('#swiper-4', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#swiper-4 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-4 .swiper-button-next',
      prevEl: '#swiper-4 .swiper-button-prev',
    },
  });

  const swiper5 = new Swiper('#swiper-5', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#swiper-5 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-5 .swiper-button-next',
      prevEl: '#swiper-5 .swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 0,
      },
      1024: {
        spaceBetween: 68,
      },
    },
  });

  const swiper6 = new Swiper('#swiper-6', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#swiper-6 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-6 .swiper-button-next',
      prevEl: '#swiper-6 .swiper-button-prev',
    },
  });

  const swiper7 = new Swiper('#swiper-7', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#swiper-7 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-7 .swiper-button-next',
      prevEl: '#swiper-7 .swiper-button-prev',
    },
  });

  window.addEventListener("resize", function () {
    setTimeout(function () {
      this.location.reload();
    });
  });
});