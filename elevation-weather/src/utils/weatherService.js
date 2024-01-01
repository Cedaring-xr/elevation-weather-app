import { DateTime } from 'luxon'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL

// luxon date format stuff
const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
	DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const formatToTime = (secs, format = 'h:mm a') => {
	return DateTime.fromSeconds(secs).toFormat(format)
}

const iconsUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

const formatCurrentWeather = (data) => {
	const {
		coord: { lat, lon },
		main: { temp, feels_like, temp_min, temp_max, humidity },
		name,
		dt,
		sys: { country, sunrise, sunset },
		weather,
		wind: { speed }
	} = data

	const { main: details, icon } = weather[0]

	return {
		lat,
		lon,
		temp,
		feels_like,
		temp_min,
		temp_max,
		humidity,
		name,
		dt,
		country,
		sunrise,
		sunset,
		details,
		icon,
		speed
	}
}

// uses onecall api to format data
const formatForecastWeather = (data) => {
	let { timezone, daily, hourly } = data
	daily = daily.slice(1, 6).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, 'ccc'),
			temp: d.temp.day,
			icon: d.weather[0].icon
		}
	})

	hourly = hourly.slice(1, 6).map((d) => {
		return {
			title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
			temp: d.temp,
			icon: d.weather[0].icon
		}
	})

	return { timezone, daily, hourly }
}

const getWeatherData = async (infoType, searchParams) => {
	const url = new URL(BASE_URL + infoType)
	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Error with weather response')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.log('Fetch Weather Error', error)
	}
}

const getFormattedWeatherData = async (searchParams) => {
	const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

	const { lat, lon } = formattedCurrentWeather

	const formattedForecastWeather = await getWeatherData('onecall', {
		lat,
		lon,
		exclude: 'current,minutely,alerts',
		units: searchParams.units
	}).then(formatForecastWeather)

	return { ...formattedCurrentWeather, ...formattedForecastWeather }
}

const findClosestElevation = (array, userInput, propertyName, amount) => {
	const sortedList = array.sort(
		(a, b) => Math.abs(a[propertyName] - userInput) - Math.abs(b[propertyName] - userInput)
	)
	return sortedList.slice(0, amount)
}

export default getFormattedWeatherData
export { formatToTime, formatToLocalTime, iconsUrlFromCode, findClosestElevation }
