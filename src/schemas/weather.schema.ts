import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export interface weatherSchemaType {
    temp: number
    dataTime: number
}

export type WeatherDocument = weatherSchemaType & Document;

@Schema()
export class Weather {
    @Prop()
    temp: number

    @Prop()
    dataTime: Date




}

export const WeatherSchema = SchemaFactory.createForClass(Weather);