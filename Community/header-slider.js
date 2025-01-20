window.addEventListener('load', () => {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		effect: 'slide',
		keyboard: true,
		loop: true,
		autoplay: {
			delay: 10000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: '.community-header_pagination',
			type: 'bullets',
			clickable: true,
			bulletActiveClass: 'cc-active',
			renderBullet: function (index, className) {
				return `
                <a href="#" class="${className} cc-community display-contents u-text-white clickable" tabindex="0" role="button" aria-label="Go to slide ${index}">
                    <div class="node-icon node-icon u-text-white">
                        <div class="node-icon-box"></div>
                        <div class="icon-line-vert top-left"></div>
                        <div class="icon-line-vert top-right"></div>
                        <div class="icon-line-vert bottom-left"></div>
                        <div class="icon-line-vert bottom-right"></div>
                        <div class="icon-line-hor top-left"></div>
                        <div class="icon-line-hor top-right"></div>
                        <div class="icon-line-hor bottom-left"></div>
                        <div class="icon-line-hor bottom-right"></div>
                    </div>
                </a>
                `;
			},
		},
	});

	const slides = swiper.slides;

	swiper.on('slideNextTransitionEnd', function () {
		const filtered = slides.filter((n) =>
			n.classList.contains('swiper-slide-active')
		);

		slides.forEach((slide) => {
			const iframe = slide.querySelector('iframe');
			iframe.src = '';
		});

		filtered.forEach((slide) => {
			const src = slide.dataset.embedUrl;
			const iframe = slide.querySelector('iframe');
			iframe.src = src;
		});
	});
});
