import {Injectable} from '@nestjs/common';
import {WeatherDocument} from './schemas/weather.schema'
import {Weather} from './schemas/weather.schema'
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose'
import {HttpService} from "@nestjs/axios";


@Injectable()
export class AppService {

    constructor(
        @InjectModel(Weather.name) private weatherModel: Model<WeatherDocument>,
        private httpService: HttpService
    ) {}
    private data = []

    async getHome() {
       // const testData = new this.weatherModel({name: 'test1', age: 25})
        //return testData.save()
        await this.getDataWeathers()
        console.log(this.data, 'data----------')
        return 'hello'
    }

    getDataWeathers() {
        return new Promise((resolve, reject) => {
            try {
                this.httpService.get('https://api.openweathermap.org/data/2.5/weather?lat=45&lon=38&appid=a8bfa013d93177abcdc8dd98aa7832ad')
                    .subscribe(data => {
                        this.data.push(data)
                        resolve(data)
                    })
            } catch (error) {
                reject(error)
            }

        })
    }

    saveDataToBD() {

    }

}
