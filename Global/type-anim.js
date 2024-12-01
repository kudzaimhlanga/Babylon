window.addEventListener('load', () => {
	gsap.registerPlugin(SplitText, ScrollTrigger);

    const splitElements = [...document.querySelectorAll(".split-type")];
    if(splitElements.length > 0){
        splitElements.forEach(n => setupSplit(n))
    }

    function setupSplit(element){
        gsap.set(element, {opacity: 1, autoAlpha: 1});
        
        const split = new SplitText(element, {type: 'lines, words, chars'});

        const tl = new gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power3.inOut",
                stagger: {
                    each: 0.0125
                }
            },
            scrollTrigger: {
				trigger: element,
				start: 'top 80%',
			},

        })

        tl.from(split.chars, {
            opacity: 0,
            autoAlpha: 0,
            y: "0.5rem",
            scale: 0.95,
        })
    }

});
