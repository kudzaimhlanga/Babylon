window.addEventListener('load', () => {
	//get UI
	const totalFinalityProviders = document.querySelectorAll(
		'.total_finality_providers'
	);

	const activeTVLs = document.querySelectorAll('.active_tvl');

	fetch('https://staking-api.babylonlabs.io/v1/stats', {
		// method: 'GET',
		// mode: 'no-cors'
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((data) => {
			updateTVL(data); // Process your data here
		})
		.catch((error) => {
			console.error(error);
		});

	fetch('https://staking-api.babylonlabs.io/v1/finality-providers', {
		// method: 'GET',
		// mode: 'no-cors'
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((data) => {
			updateFinalityProviders(data); // Process your data here
		})
		.catch((error) => {
			console.error(error);
		});

	function updateFinalityProviders(data) {
		const providers = data.data.length;
		updateElements(totalFinalityProviders, providers);
	}

	function updateTVL(data) {
		const { active_tvl } = data.data;

		const tvl = satoshiToBtc(active_tvl);
		const formattedTVL = parseFloat(tvl.toFixed(2)).toLocaleString();
		updateElements(activeTVLs, formattedTVL);
	}

	function satoshiToBtc(satoshi) {
		const num = satoshi / 1e8;
		return num;
	}

	function updateElements(elementsArr, value) {
		if (elementsArr.length > 0) {
			elementsArr.forEach((element) => (element.textContent = value));
		}
	}
});
