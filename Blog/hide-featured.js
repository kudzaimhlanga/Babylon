window.addEventListener('load', () => {
	let showFeatured = true;
	let tags = [...document.querySelectorAll('.blog-filters .blog-tag')];
	const searchInput = document.querySelector('.search-form-input');
	const featuredArticles = document.querySelector('.featured-articles');

	tags.forEach((tag) => {
		tag.addEventListener('change', () => {
			checkFeatured();
		});
	});

	searchInput.addEventListener('keyup', checkFeatured);

	function checkFeatured() {
		const allInputs = [...tags, searchInput];
		let displayStyle = 'block';

		allInputs.forEach((input) => {
			if (input.classList.contains('fs-cmsfilter_active')) {
				displayStyle = 'none';
			}
		});

		featuredArticles.style.display = displayStyle;
	}
});
