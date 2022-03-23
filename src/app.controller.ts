import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {WeatherSchema} from './schemas/weather.schema'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello() {
    return this.appService.getHome();
  }
}
