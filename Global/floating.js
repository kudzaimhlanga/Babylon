window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger);

	const parallaxElements = [...document.querySelectorAll('.anim-parallax')];
	const floatingElements = [...document.querySelectorAll('.anim-float')];

	function setInit(elementsArr) {
		gsap.to(elementsArr, {
			opacity: 1,
			autoAlpha: 1,
			duration: 0.25,
			ease: 'power3.out',
			stagger: { amount: 0.025 },
		});
	}

	if (parallaxElements.length > 0) {
		parallaxElements.forEach((n) => addParallax(n));

		//set inital state
		setInit(parallaxElements);
	}

	if (floatingElements.length > 0) {
		floatingElements.forEach((n) => addFloat(n));

		setInit(floatingElements);
	}

	function getRand() {
		let rand = Math.round(Math.random() * -5);
		const randNeg = Math.min(rand, -2);

		rand = Math.round(Math.random() * -5);
		const randPos = Math.max(Math.abs(rand), 2);

		return { rand, randNeg, randPos };
	}

	function addFloat(element) {
		//stagger and delay elements
		const delay = Math.round(0.75 * Math.random());

		//generate random coordinates
		const randY = getRand().randPos;
		const randYNeg = getRand().randNeg;

		const randX = getRand().randPos;
		const randXNeg = getRand.randNeg;

		const tl = new gsap.timeline({
			defaults: {
				duration: 2.5,
				ease: 'back.inOut(2.5)',
				yoyo: true,
				delay: delay,
				reversed: true,
				repeat: -1,
			},
		});

		const reverse = Math.round(Math.random() * 1);
		if (reverse === 1) {
			tl.fromTo(element, { y: `${randYNeg}%` }, { y: `${randY}%` });
		} else {
			tl.fromTo(element, { y: `${randY}%` }, { y: `${randYNeg}%` });
		}
	}

	function addParallax(element) {
		const tl = new gsap.timeline({
			scrollTrigger: {
				trigger: element,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
			},
		});

		tl.fromTo(element, { y: '25%' }, { y: '-25%' });
	}
});
