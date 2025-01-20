window.addEventListener("DOMContentLoaded", () => {
    if(document.querySelector(".investors-carousel")){
        const investorCarouselComponents = [...document.querySelectorAll(".investors-carousel")];
        
        investorCarouselComponents.forEach((carousel) => {
            initInvestorSlider(carousel)
        })

    }

    function initInvestorSlider(carousel){
        const swiper = carousel.querySelector(".swiper");
        const arrows = [...carousel.querySelectorAll(".investors_carousel-arrows a")]

        const slider = new Swiper(swiper, {
            spaceBetween: 24,
            speed: 1000,
            keyboard: true,
            loop: true,
            slidesPerView: "auto",
            loopAddBlankSlides: true,
            slidesPerGroup: 2,
            navigation: {
                prevEl: arrows[0],
                nextEl: arrows[1]
            },
            breakpoints: {
                991: {
                    slidesPerGroup: 4
                }
            }
        })
    }
})