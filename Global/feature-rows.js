window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const featureRows = [...document.querySelectorAll('.feature-row')];

	if (featureRows.length > 0) {
		featureRows.forEach((row) => addTrigger(row));
	}

	function addTrigger(element) {
		const topLine = element.querySelector('.top-line');

		const tl = new gsap.timeline({
			defaults: {
				duration: 0.75,
				ease: 'power3.out',
			},
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
			},
		});

		tl.from(element, { opacity: 0, y: '2.5rem' }).from(
			topLine,
			{ width: 0, duration: 1, ease: 'power3.inOut' },
			'<'
		);
	}
});
