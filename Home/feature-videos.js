window.addEventListener('load', () => {
	const videoEmbeds = [...document.querySelectorAll('.video-embed')];

	if (videoEmbeds.length > 0) {
		videoEmbeds.forEach((embed) => {
			playVideo(embed);
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
