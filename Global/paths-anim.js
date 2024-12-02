window.addEventListener('load', () => {
	gsap.registerPlugin(DrawSVGPlugin);

	const pathEmbeds = [...document.querySelectorAll('.stroke-embed')];

	if (pathEmbeds.length > 0) {
		//draws all elements with the "draw-me" class applied
		pathEmbeds.forEach((embed) => animateStrokes(embed));
	}

	//create paths to animate
	function createPaths(embed) {
		const path = embed.querySelector('.pathToDraw').cloneNode(true);
		embed.querySelector('svg').innerHTML = '';

		for (let i = 0; i < 8; i++) {
			const newPath = path.cloneNode(true);
			embed.querySelector('svg').appendChild(newPath);
		}
	}

	function animateStrokes(embed) {
		createPaths(embed);
		const paths = [...embed.querySelectorAll('.pathToDraw')];
		const duration = 15;

		const tl = new gsap.timeline({
			defaults: {
				duration: duration,
				ease: 'linear',
				repeat: -1,
			},
		});

		console.log(paths);

		tl.fromTo(paths[0], { drawSVG: '0% 2%' }, { drawSVG: '100% 102%' })
			.fromTo(paths[1], { drawSVG: '5% 10%' }, { drawSVG: '105% 110%' }, '<')
			.fromTo(paths[2], { drawSVG: '20% 35%' }, { drawSVG: '120% 135%' }, '<')
			.fromTo(paths[3], { drawSVG: '38% 44%' }, { drawSVG: '138% 144%' }, '<')
			.fromTo(paths[4], { drawSVG: '55% 65%' }, { drawSVG: '155% 165%' }, '<')
			.fromTo(paths[5], { drawSVG: '70% 75%' }, { drawSVG: '170% 175%' }, '<')
			.fromTo(paths[6], { drawSVG: '80% 90%' }, { drawSVG: '180% 190%' }, '<')
			.fromTo(paths[7], { drawSVG: '95% 100%' }, { drawSVG: '195% 200%' }, '<');
	}
});
