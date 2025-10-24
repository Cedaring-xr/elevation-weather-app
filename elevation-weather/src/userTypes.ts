// return format for the location (direct) api call
export type TweatherData = {
	lat: number
	lon: number
	timezone: string
	timezone_offset: string
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
		weather: {
			id: number
			main: string
			description: string
			icon: string
		}[]
	}
	hourly: {
		dt: number
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
		weather: {
			id: number
			main: string
			description: string
			icon: string
		}[]
		pop: number
	}[]
	daily: {
		dt: number
		sunries: number
		sunset: number
		moonrise: number
		moonset: number
		moonphase: number
		summary: string
		temp: {
			day: number
			min: number
			max: number
			night: number
			even: number
			morn: number
		}
		feels_like: {
			day: number
			night: number
			eve: number
			morn: number
		}
	}[]
	pop: number
}

// return format from the city (geo) api call
export type CitySearchData = {
	name: string
	local_names?: {}
	lat: number
	lon: number
	country: string
	state: string
}

// format for auto-fill of search with multiple city suggestions
export type optionType = {
	name: string
	lat: number
	lon: number
}

// not used????
// export type City = {
// 	name: string
// 	elevation: number
// 	location: {
// 		lat: number
// 		lon: number
// 	}
// }
