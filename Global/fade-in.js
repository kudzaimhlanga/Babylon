window.addEventListener('DOMContentLoaded', () => {
	const fadeInElements = [...document.querySelectorAll('.fade-in')];

	if (fadeInElements.length > 0) {
		animateElements(fadeInElements);
	}

	function animateElements(elements) {
		gsap.set(elements, { opacity: 1, autoAlpha: 1 });
		gsap.from(elements, {
			y: '2.5rem',
			opacity: 0,
			duration: 0.5,
			ease: 'power2.out',
			stagger: {
				each: 0.05,
			},
		});
	}
});
