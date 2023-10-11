const swiper = new Swiper('#slider1', {
   
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const swiper2 = new Swiper('#slider2', {
    
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });
  const swiper3 = new Swiper('#slider3', {
    
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
  
    // If we need pagination
 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });
  