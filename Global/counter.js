window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const counterElements = [...document.querySelectorAll('.counterup')];

	if (counterElements.length > 0) {
		for (let i = 0; i < counterElements.length; i++) {
			addTrigger(counterElements[i]);
		}
	}

	function addTrigger(element) {
		ScrollTrigger.create({
			trigger: element,
			start: 'top 80%',
			onEnter: () => {
				$(element).counterUp({
					time: 650,
				});
			},
		});
	}
});
