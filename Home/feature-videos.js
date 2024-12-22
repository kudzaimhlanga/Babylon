window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const videoEmbeds = [...document.querySelectorAll('.video-embed')];

	if (videoEmbeds.length > 0) {
		videoEmbeds.forEach((embed) => {
			ScrollTrigger.create({
				trigger: embed,
				start: 'top 70%',
				onEnter: () => {
					playVideo(embed);
				},
			});

			embed.addEventListener('mouseenter', () => {
				playVideo(embed);
			});
		});
	}

	function playVideo(embed) {
		const video = embed.querySelector('video');
		video.currentTime = 0;
		video.play();
	}
});
