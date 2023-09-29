import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  imgUrl: string;

  @Prop()
  favorite: boolean;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
