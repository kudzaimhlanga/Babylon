window.addEventListener('load', () => {
	const filters = [...document.querySelectorAll('[kdv-filter]')];

	const tagsInList = [...document.querySelectorAll('.blog-list .blog-tag')];
	const tagSet = new Set();
	tagsInList.forEach((tag) => tagSet.add(tag.textContent));
	const tagsArr = [...tagSet];

	if (filters.length > 0) {
		filters.forEach((filter) => {
			const filterTag = filter.getAttribute('kdv-filter');
			if (!findTagsFromList(filterTag)) filter.style.display = 'none';
		});
	}

	function findTagsFromList(category) {
		if (tagsArr.indexOf(category) > -1) {
			return true;
		} else {
			return false;
		}
	}
});
