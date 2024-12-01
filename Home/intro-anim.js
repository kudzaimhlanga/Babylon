window.addEventListener('load', () => {
	const homeHeader = document.querySelector('.home-header');

	const homeHeaderLeft = [
		...homeHeader.querySelectorAll('.home-header_left > *'),
	];
	const homeHeaderRight = [
		...homeHeader.querySelectorAll('.home-header_right .home-header_row'),
	];
	const hhElements = [
		...homeHeader.querySelectorAll(
			'.hh_bottom-left, .hh_bottom_right, .hh_top-right, .hh_bottom-left_square'
		),
	];
	const childrenElements = [
		...homeHeader.querySelectorAll(
			'.hh_bottom-left > *:not(.hh_bottom-left_square), .hh_bottom_right > *, .hh_top-right > *'
		),
	];

	setInit();
	runAnim();

	function setInit() {
		const introAnimElements = document.querySelectorAll('[kdv-intro]');
		introAnimElements.forEach((n) => {
			n.style.opacity = 1;
			n.style.visibility = 'visible';
		});
	}

	function runAnim() {
		const duration = 1.5;

		const tl = new gsap.timeline({
			defaults: {
				duration: duration,
				ease: 'expo.out',
			},
		});

		tl.to('.home-header', { scaleY: 1, ease: 'expo.inOut' })
			.from('.nav', { opacity: 0, y: '-120%' }, '<')
			.from(hhElements, { scaleX: 0, delay: duration * 0.75 }, '<')
			.from(
				homeHeaderLeft,
				{ opacity: 0, y: '1.25rem', stagger: { amount: 0.125 } },
				'<'
			)
            .from(
                homeHeaderRight, {
                    y: "120%",
                    stagger: { amount: 0.125}
                },
                '<'
            )
			.from(
				childrenElements,
				{
					opacity: 0,
					y: '1.5rem',
					delay: duration * 0.5,
					stagger: { amount: 0.25 },
				},
				'<'
			);
	}
});
