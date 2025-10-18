export type TweatherData = {
	lat: number
	lon: number
	timezone: string
	elevation?: number
	current: {
		dt: number
		sunrise: number
		sunset: number
		temp: number
		feels_like: number
		pressure: number
		humidity: number
		dew_point: number
		uiv: number
		clouds: number
		visibility: number
		wind_speed: number
		wind_deg: number
		wind_gust: number
	}
	daily: {
		title: string
		temp: number
		icon: string
	}[]
	hourly: {
		title: string
		temp: number
		icon: string
	}[]

	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	humidity: number
	name: string
	dt: number
	country: string
	sunrise: number
	sunset: number
	details: string
	icon: string
	speed: number
}

export type CitySearchData = {
	name: string
	local_names?: {}
	lat: number
	lon: number
	country: string
	state: string
}

// OLD FORMAT
// export type TweatherData = {
// 	timezone: string
// 	elevation?: number
// 	daily: {
// 		title: string
// 		temp: number
// 		icon: string
// 	}[]
// 	hourly: {
// 		title: string
// 		temp: number
// 		icon: string
// 	}[]
// 	lat: number
// 	lon: number
// 	temp: number
// 	feels_like: number
// 	temp_min: number
// 	temp_max: number
// 	humidity: number
// 	name: string
// 	dt: number
// 	country: string
// 	sunrise: number
// 	sunset: number
// 	details: string
// 	icon: string
// 	speed: number
// }

export type City = {
	name: string
	elevation: number
	location: {
		lat: number
		lon: number
	}
}
