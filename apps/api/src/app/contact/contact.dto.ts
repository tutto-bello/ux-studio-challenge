import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { IContact } from '@ux-studio-challenge/shared';

export class CreateContactDto implements IContact {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  phone: string;

  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  imgUrl: string;

  @IsBoolean()
  @ApiProperty()
  favorite: boolean;
}

export class UpdateContactDto extends CreateContactDto {}
