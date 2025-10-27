const fs = require('fs')

const addCitiesToJSON = (cities, filename) => {
	// read the existing JSON file
	let data = []
	try {
		const jsonContent = fs.readFileSync(filename, 'utf-8')
		data = JSON.parse(jsonContent)
	} catch (error) {
		console.log('file does not exist or is empty')
	}

	// add the new names to the data
	cities.forEach((city) => {
		data.push({ city })
	})

	// write the updated data back to the JSON file
	fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8')
}

const jsonFileName = '../data/coloradoCities.json'
