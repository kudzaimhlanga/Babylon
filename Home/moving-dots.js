window.addEventListener('load', () => {
	if (window.innerWidth > 991) {
		setTimeout(() => {
			runAnim();
		}, 1500);
	}
});

function runAnim() {
	const dots = document.querySelectorAll('.hh_bottom-left_dots > *');
	const dotTwo = document.querySelector('.hh-dot.cc-hh_bottom-left');
	const dotThree = document.querySelector('.hh_bottom-left_dots + div');
	const dotFour = document.querySelector('.hh_top-right > *');

	const tl = new gsap.timeline({
		defaults: {
			duration: 2,
			ease: 'power3.inOut',
			yoyo: true,
			repeat: -1,
			repeatDelay: 2,
		},
	});

	tl.to([...dots, dotThree], { y: '-1200%', stagger: { each: 0.25 } })
		.from(dotTwo, { marginBottom: 0, delay: 1 }, '<')
		.to(dotFour, { x: '-5800%', delay: 2 }, '<');

    window.addEventListener("resize", () => {
        if(window.innerWidth < 992){
            tl.kill();
        }
    })
}
