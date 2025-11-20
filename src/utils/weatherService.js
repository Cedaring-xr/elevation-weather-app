import { DateTime } from 'luxon'

// luxon date format stuff
const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
	DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const formatToTimezone = (secs, zone, format = 'h:mm a') => {
	return DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
}

const iconsUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

// Temperature conversion functions
const fahrenheitToCelsius = (fahrenheit) => {
	return Math.round(((fahrenheit - 32) * 5) / 9)
}

const celsiusToFahrenheit = (celsius) => {
	return Math.round((celsius * 9) / 5 + 32)
}

// Converts temperature based on target unit
// temp: the temperature value
// toUnit: 'C' for Celsius, 'F' for Fahrenheit
// fromUnit: 'C' or 'F' (defaults to 'F' since API returns imperial)
const convertTemperature = (temp, toUnit, fromUnit = 'F') => {
	if (fromUnit === toUnit) return Math.round(temp)

	if (fromUnit === 'F' && toUnit === 'C') {
		return fahrenheitToCelsius(temp)
	}

	if (fromUnit === 'C' && toUnit === 'F') {
		return celsiusToFahrenheit(temp)
	}

	return Math.round(temp)
}

const fetchLocationWeather = async (query: string) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${query.trim()}&limit=1&appid=${
				process.env.REACT_APP_API_KEY
			}`
		)
		if (!response.ok) {
			throw new Error('Error with weather response')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.log('Fetch Weather Error', error)
	}
}

// gets called from the elevation page
const getCityWeatherData = async (location: { lat: Number, lon: number }) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
		)
		if (!response.ok) {
			throw new Error('Error with fetching city response')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.log('Fetch City data Error', error)
	}
}

const findClosestElevation = (array, userInput, propertyName, amount) => {
	const sortedList = array.sort(
		(a, b) => Math.abs(a[propertyName] - userInput) - Math.abs(b[propertyName] - userInput)
	)
	return sortedList.slice(0, amount)
}

export {
	formatToTimezone,
	formatToLocalTime,
	iconsUrlFromCode,
	findClosestElevation,
	convertTemperature,
	fahrenheitToCelsius,
	celsiusToFahrenheit,
	getCityWeatherData,
	fetchLocationWeather
}
