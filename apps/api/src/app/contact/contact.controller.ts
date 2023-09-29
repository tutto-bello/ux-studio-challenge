import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ApiFile, IdParams } from '../core/controller.helpers';
import { CreateContactDto, UpdateContactDto } from './contact.dto';
import { ContactRepository } from './contact.repository';

@Controller('contact')
@ApiTags('contact')
@ApiBearerAuth()
export class ContactController {
  constructor(private readonly contactRepository: ContactRepository) {}

  @Post()
  @ApiBody({ type: CreateContactDto })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactRepository.create(createContactDto);
  }

  @Put('/logo-upload')
  @ApiConsumes('multipart/form-data')
  @ApiFile()
  @UseInterceptors(FileInterceptor('file'))
  uploadDocuments(@UploadedFile() file: Express.Multer.File) {
    return this.contactRepository.uploadDocuments(file);
  }

  @Get()
  findAll() {
    return this.contactRepository.findAll();
  }

  @Get('/:id')
  @ApiParam({ name: 'id' })
  findOne(@Param() params: IdParams) {
    return this.contactRepository.findOne(params.id);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  delete(@Param() params: IdParams) {
    return this.contactRepository.delete(params.id);
  }

  @Put('/:id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateContactDto })
  updateClinc(
    @Param() params: IdParams,
    @Body() createContactDto: UpdateContactDto
  ) {
    return this.contactRepository.update(params.id, createContactDto);
  }
}
