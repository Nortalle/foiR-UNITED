const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', async (e) => {
	e.preventDefault(); // stop form submission

	const title = document.getElementById('title').value;
	const date = document.getElementById('datetime').value + ':00.000Z';
	const description = document.getElementById('description').value;
	const places = +document.getElementById('places').value;
	const price = +document.getElementById('price').value;
	const street = document.getElementById('street').value;
	const city = document.getElementById('city').value;
	const country = document.getElementById('country').value;
	const zip = document.getElementById('zip').value;

	const data = {
		src: 'https://images.unsplash.com/photo-1576724196706-3f23f51ea351',
		title,
		date,
		description,
		places,
		price,
		street,
		city,
		country,
		zip,
	};

	await fetch('http://localhost:3000/api/shows', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log('Success:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});

	window.location.href = '/shows';
});
