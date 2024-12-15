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

		for (let i = 0; i < 12; i++) {
			const newPath = path.cloneNode(true);
			embed.querySelector('svg').appendChild(newPath);
		}
	}

	function animateStrokes(embed) {
		createPaths(embed);
		const paths = [...embed.querySelectorAll('.pathToDraw')];
		const duration = 50;

		const tl = new gsap.timeline({
			defaults: {
				duration: duration,
				ease: 'linear',
				repeat: -1,
			},
		});

		// console.log(paths);

		//longt paths
		tl.fromTo(paths[0], { drawSVG: '0% 10%' }, { drawSVG: '100% 110%' })
			.fromTo(paths[1], { drawSVG: '13% 23%' }, { drawSVG: '113% 123%' }, '<')
			.fromTo(paths[2], { drawSVG: '26% 36%' }, { drawSVG: '126% 136%' }, '<')

			//short mid short
			.fromTo(paths[3], { drawSVG: '39% 42%' }, { drawSVG: '139% 142%' }, '<')
			.fromTo(paths[4], { drawSVG: '45% 50%' }, { drawSVG: '145% 150%' }, '<')
			.fromTo(paths[5], { drawSVG: '53% 56%' }, { drawSVG: '153% 156%' }, '<')

			// mid mid v short mid short
			.fromTo(paths[6], { drawSVG: '59% 64%' }, { drawSVG: '159% 164%' }, '<')
			.fromTo(paths[7], { drawSVG: '67% 72%' }, { drawSVG: '167% 172%' }, '<')
			.fromTo(paths[8], { drawSVG: '75% 76%' }, { drawSVG: '175% 176%' }, '<')
			.fromTo(paths[9], { drawSVG: '79% 84%' }, { drawSVG: '179% 184%' }, '<')
			.fromTo(paths[10], { drawSVG: '87% 90%' }, { drawSVG: '187% 190%' }, '<')
			.fromTo(paths[11], { drawSVG: '93% 97%' }, { drawSVG: '193% 197%' }, '<');
	}
});
