import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {weatherDtoTypes} from "../Dto/weather.dto";

export type WeatherDocument = weatherDtoTypes & Document;

@Schema()
export class Weather {
    @Prop()
    temp: number




}

export const WeatherSchema = SchemaFactory.createForClass(Weather);