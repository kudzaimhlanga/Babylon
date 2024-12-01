window.addEventListener('load', () => {
	const triggers = [
		...document.querySelectorAll(
			"[fs-mirrorclick-element='trigger']:not([fs-mirrorclick-element='trigger-100'])"
		),
	];
	const targets = [
		...document.querySelectorAll(
			"[fs-mirrorclick-element='target']:not([fs-mirrorclick-element='target-100'])"
		),
	];

	if (triggers.length > 0) {
		for (let i = 0; i < triggers.length; i++) {
			const index = i + 1;
			triggers[i].setAttribute('fs-mirrorclick-element', `trigger-${index}`);
			targets[i].setAttribute('fs-mirrorclick-element', `target-${index}`);
		}
	}
});
