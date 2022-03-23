import {Injectable} from '@nestjs/common';
import {WeatherDocument} from './schemas/weather.schema'
import {Weather} from './schemas/weather.schema'
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose'
import {HttpService} from "@nestjs/axios";
import {response} from "express";
import {WeatherDto, weatherDtoTypes} from "./Dto/weather.dto";


@Injectable()
export class AppService {

    constructor(
        @InjectModel(Weather.name) private weatherModel: Model<WeatherDocument>,
        private httpService: HttpService
    ) {
    }

    private data = []

    async getHome() {

        const response: any = await this.getDataWeathers()
        const responseDto = new WeatherDto(response)
        const {temp} = responseDto.getDto()
        console.log(temp, 'temp555555')
        return this.saveDataToBD(temp)

    }

    getDataWeathers() {
        return new Promise((resolve, reject) => {
            try {
                this.httpService.get('https://api.openweathermap.org/data/2.5/weather?lat=45&lon=38&appid=a8bfa013d93177abcdc8dd98aa7832ad')
                    .subscribe((data) => {
                        this.data.push(data)
                        resolve(data)
                    })
            } catch (error) {
                reject(error)
            }

        })
    }

    saveDataToBD(data: number) {
        console.log(data, 'data7777777777')
        const testData = new this.weatherModel({temp: data})
        return testData.save()
    }

}
