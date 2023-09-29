import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AwsUploadService } from '../aws/aws-upload.service';
import { ContactController } from './contact.controller';
import { ContactRepository } from './contact.repository';
import { ContactSchema } from './contact.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  providers: [ContactRepository, AwsUploadService],
  controllers: [ContactController],
  exports: [ContactRepository],
})
export class ContactModule {}
