window.addEventListener('load', () => {
	if (document.querySelector('.footer-year')) {
		const yearSpans = [...document.querySelectorAll('.footer-year')];
		const currentYear = new Date().getFullYear();

		yearSpans.forEach((span) => {
			span.innerText = currentYear.toString();
		});
	}
});
