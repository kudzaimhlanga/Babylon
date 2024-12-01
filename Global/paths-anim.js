window.addEventListener('load', () => {
	gsap.registerPlugin(DrawSVGPlugin);

	const pathEmbeds = [...document.querySelectorAll('.stroke-embed')];

	if (pathEmbeds.length > 0) {
		//draws all elements with the "draw-me" class applied
		pathEmbeds.forEach((embed) => animateStrokes(embed));
	}

	function animateStrokes(embed) {
		const paths = [...embed.querySelectorAll('.pathToDraw')];
		const duration = 15;

		const tl = new gsap.timeline({
			defaults: {
				duration: duration,
				ease: 'linear',
				repeat: -1,
			},
		});

		tl.fromTo(paths[0], { drawSVG: '20% 30%' }, { drawSVG: '120% 130%' })
			.fromTo(paths[1], { drawSVG: '0% 5%' }, { drawSVG: '100% 105%' }, '<')
			.fromTo(paths[2], { drawSVG: '60% 70%' }, { drawSVG: '160% 170%' }, '<')
			.fromTo(paths[3], { drawSVG: '45% 50%' }, { drawSVG: '145% 150%' }, '<');
	}
});
