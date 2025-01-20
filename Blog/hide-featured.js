window.addEventListener('load', () => {
	let showFeatured = true;
	let tags = [...document.querySelectorAll('.blog-filters .blog-tag')];
	const searchInput = document.querySelector('.search-form-input');
	const featuredArticles = document.querySelector('.featured-articles');
	const blogList = document.querySelector(".blog-list")

	tags.forEach((tag) => {
		tag.addEventListener('change', () => {
			checkFeatured();
		});
	});

	searchInput.addEventListener('keyup', checkFeatured);

	function checkFeatured() {
		const allInputs = [...tags, searchInput];
		let displayStyle = 'block';
		let dataFiltered = "false";

		allInputs.forEach((input) => {
			if (input.classList.contains('fs-cmsfilter_active')) {
				displayStyle = 'none';
				dataFiltered = "true";
			}
		});

		blogList.setAttribute("data-filtered", dataFiltered);
		featuredArticles.style.display = displayStyle;
	}

	checkFeatured();
});
