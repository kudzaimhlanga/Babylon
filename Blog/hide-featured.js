window.addEventListener('load', () => {
	let inputs = [...document.querySelectorAll("input[type='radio']")];
	const featuredArticles = document.querySelector('.featured-articles');

	inputs.forEach((input) => {
		input.addEventListener('change', () => {
			checkFeatured(input);
		});
	});

	function checkFeatured(input) {
		if (input.checked) {
			if ((input.value === 'All')) {
				featuredArticles.style.display = 'block';
			} else {
				featuredArticles.style.display = 'none';
			}
		}
	}
});
