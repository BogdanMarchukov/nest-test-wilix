import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WeatherDocument = Weather & Document;

@Schema()
export class Weather {
    @Prop()
    name: string;

    @Prop()
    age: number;


}

export const WeatherSchema = SchemaFactory.createForClass(Weather);