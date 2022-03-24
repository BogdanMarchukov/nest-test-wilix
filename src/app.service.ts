import {Injectable} from '@nestjs/common';
import {WeatherDocument} from './schemas/weather.schema'
import {Weather} from './schemas/weather.schema'
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose'
import {HttpService} from "@nestjs/axios";
import {WeatherDto} from "./Dto/weather.dto";


@Injectable()
export class AppService {

    constructor(
        @InjectModel(Weather.name) private weatherModel: Model<WeatherDocument>,
        private httpService: HttpService
    ) {
    }

    private timeData = 0


    async startApp() {
        this.timer()
        return 'start app'
    }

    async saveData() {
        const response: any = await this.getDataWeathers()
        const responseDto = new WeatherDto(response)
        const {temp} = responseDto.getDto()
        return this.saveDataToBD(temp)
    }

    getDataWeathers() {
        return new Promise((resolve, reject) => {
            try {
                this.httpService.get('https://api.openweathermap.org/data/2.5/weather?lat=45&lon=38&appid=a8bfa013d93177abcdc8dd98aa7832ad')
                    .subscribe((data) => {
                        resolve(data)
                    })
            } catch (error) {
                reject(error)
            }
        })
    }

    async timer() {
        if (this.timeData === 0) {
            await this.saveData()
        }
        setTimeout(() => {
            this.timer()
        }, 10 * 60 * 1000)
    }

    saveDataToBD(data: number) {


        const testData = new this.weatherModel({temp: data, dataTime: Date.now()})
        return testData.save()
    }

}
