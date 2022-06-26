let timer = null
let callback = ([entry]) => {
    const toast = document.querySelector('.toast')
    if (entry.isIntersecting) {
      toast.classList.add('active')
      timer = setTimeout(() => {
        toast.classList.remove('active')
       }, 5 * 1000);
      return
    }
    clearTimeout(timer)
    toast.classList.remove('active')
}

const options = { threshold: 0 }

let observer = new IntersectionObserver(callback, options)

const section = document.querySelector('.Sec3')
observer.observe(section)


$(document).ready(function () {
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

  const swiper9 = new Swiper('#swiper-9', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: "#swiper-9 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '#swiper-9 .swiper-button-next',
      prevEl: '#swiper-9 .swiper-button-prev',
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
});