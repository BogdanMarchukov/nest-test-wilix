import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {HttpModule} from "@nestjs/axios";
import {MongooseModule} from '@nestjs/mongoose';
import {Weather, WeatherSchema} from './schemas/weather.schema'

@Module({

    imports: [
        HttpModule,
        MongooseModule.forRoot('mongodb://root:example@188.166.47.223:27017'),
        MongooseModule.forFeature([{ name: Weather.name, schema: WeatherSchema }])

    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
