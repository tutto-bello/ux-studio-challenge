import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ManagedUpload } from 'aws-sdk/clients/s3';
import { Model } from 'mongoose';
import { AwsUploadService } from '../aws/aws-upload.service';
import { CreateContactDto, UpdateContactDto } from './contact.dto';
import { Contact, ContactDocument } from './contact.schema';

export const notEmptyOrRegex = (text: string) =>
  text ? { $regex: new RegExp(text, 'i') } : { $ne: '' };

@Injectable()
export class ContactRepository {
  logger = new Logger('ContactRepository');

  constructor(
    @InjectModel(Contact.name)
    private readonly contactModel: Model<ContactDocument>,
    private readonly awsUploadService: AwsUploadService
  ) {}

  async uploadDocuments(file: Express.Multer.File) {
    let uploadedFile: ManagedUpload.SendData;
    try {
      uploadedFile = await this.awsUploadService.uploadPublicProfileDocument(
        file.buffer,
        file.originalname
      );
    } catch (error) {
      this.logger.error(error.toString());
      throw new BadRequestException('Failed to upload');
    }

    const document = {
      name: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      location: uploadedFile.Location,
      key: uploadedFile.Key,
      createdAt: new Date(),
    };

    return document;
  }

  create(createContactDto: CreateContactDto) {
    const newContact = new this.contactModel(createContactDto);

    return newContact.save();
  }

  async update(id: string, updateContact: UpdateContactDto) {
    const contact = await this.contactModel.findOne({
      _id: id,
    });

    contact.name = updateContact.name;
    contact.phone = updateContact.phone;
    contact.email = updateContact.email;
    contact.imgUrl = updateContact.imgUrl;
    contact.favorite = updateContact.favorite;

    await contact.save();

    this.findAll();
  }

  async findAll() {
    return this.contactModel.find();
  }

  async findOne(id: string) {
    const contacts = await this.contactModel.findOne({
      _id: id,
    });

    if (!contacts) {
      throw new BadRequestException(
        'There is no such contact, or you are not entitled to it!'
      );
    }

    return contacts;
  }

  dropCollection() {
    return this.contactModel.deleteMany({});
  }

  async delete(id: string) {
    const contact = await this.contactModel.findOne({ _id: id });

    if (!contact) {
      throw new BadRequestException('There is no such contact!');
    }

    await this.contactModel.deleteOne({ _id: id });
  }
}
