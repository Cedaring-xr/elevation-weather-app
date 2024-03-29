export type TweatherData = {
	timezone: string
	elevation?: number
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
	lat: number
	lon: number
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

export type City = {
	name: string
	elevation: number
	location: {
		lat: number
		lon: number
	}
}
