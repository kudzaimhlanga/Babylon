window.addEventListener('load', () => {
	gsap.registerPlugin(ScrollTrigger) 

	const counterElements = [...document.querySelectorAll('.counterup')];

	if (counterElements.length > 0) {
		for (let i = 0; i < counterElements.length; i++) {
			addTrigger(counterElements[i]);
			// scramble(counterElements[i])
		}
	}


	// function scramble(element){
	// 	const nums = getRandNumbers(element);
		
	// 	const tl = new gsap.timeline({
	// 		defaults: {
	// 			duration: 2,
	// 			ease: "linear"
	// 		}
	// 	});

	// 	console.log(nums)

	// 	tl.from(element, {scrambleText: {
	// 		chars: "0123457890",
	// 		revealDelay: 1,
	// 		speed: 2
	// 	}})
	// }

	function getRandNumbers(element){
		const elementText = String(element.innerText);
		let num = '';
		
		for(let i = 0; i < elementText.length; i++){
			const randNum = Math.floor(Math.random() * 9);
			num += `${randNum}`
		}

		return num;
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
