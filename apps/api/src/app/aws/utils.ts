import { extname } from 'path';
import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { diskStorage } from 'multer';
import bcrypt from 'bcrypt';
import uuid4 from 'uuid4';
import { FileInterceptor } from '@nestjs/platform-express';

export const ONE_MEGABYTE = 1048576;

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 10).toString(10))
    .join('');
  callback(null, `${name}${randomName}${fileExtName}`);
};

export const localExcelConfig = FileInterceptor('file', {
  storage: diskStorage({
    destination: './uploads',
    filename: editFileName,
  }),
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(xlsx|xls)$/i)) {
      return callback(new BadRequestException('Csak xlsx vagy xls lehet!'), false);
    }
    callback(null, true);
  },
});

export const uploadFile = (fileSize = ONE_MEGABYTE) => ({
  fileSize,
  storage: diskStorage({
    destination: './uploads',
    filename: editFileName,
  }),
  fileFilter: imageFileFilter,
});

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return callback(new HttpException('Only image files are allowed!', HttpStatus.BAD_REQUEST), false);
  }
  callback(null, true);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDefaultsFromSchema = (schema: any) => {
  const defaults = {};

  for (const property in schema) {
    const field = schema[property];
    if ('default' in field) {
      defaults[property] = field.default;
    }
  }

  return defaults;
};

export const replaceHungarianChars = (text: string) =>
  text
    .replace(/á/gi, 'a')
    .replace(/é/gi, 'e')
    .replace(/í/gi, 'i')
    .replace(/ü/gi, 'u')
    .replace(/ű/gi, 'u')
    .replace(/ú/gi, 'u')
    .replace(/ö/gi, 'o')
    .replace(/ő/gi, 'o')
    .replace(/ó/gi, 'o');

export const hashPassword = async (rawPassword: string) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(rawPassword, salt);
  return password;
};

export const comparePassword = (passwordOne: string, passwordTwo: string) => {
  return bcrypt.compare(passwordOne, passwordTwo);
};

export const generateToken = () => uuid4();

export const capitalize = (value: string, keepOriginalValue = false) => {
  if (typeof value !== 'string') {
    return keepOriginalValue ? value : '';
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
};
