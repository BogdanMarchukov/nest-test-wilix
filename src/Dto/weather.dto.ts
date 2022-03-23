interface coordTypes {
    lon: number
    lat: number
}

interface weatherType {
    id: number
    main: string
    description: string
    icon: string
}

interface mainType {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

interface windType {
    speed: number
    deg: number
}

interface cloudsType {
    all: number
}

interface sysType {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
}

export interface weatherDtoTypes {
    coord: coordTypes
    weather: weatherType[]
    base: string
    main: mainType
    visibility: number
    wind: windType
    clouds: cloudsType
    dt: number
    sys: sysType
    timezone: number
    id: number
    name: string
    cod: number
}

export class WeatherDto {
    weatherData: weatherDtoTypes

    constructor(weatherData: weatherDtoTypes) {
        this.weatherData = weatherData
    }

    getDto() {
        return {
            temp: this.weatherData.main.temp
        }
    }

}
