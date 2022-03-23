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
interface main {
    temp: number
    feels_like: number

}

interface weatherDtoTypes {
    coord: coordTypes
    weather: weatherDto[]
    base: string

}

class weatherDto{



    constructor() {
    }

}