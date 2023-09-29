import { IsMongoId } from 'class-validator';
import { ApiBody } from '@nestjs/swagger';
import { SetMetadata } from '@nestjs/common';
import {
  ReferenceObject,
  SchemaObject,
} from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

// Use this decorator only on routes which have to
// be excluded from JWT authentication
export const Public = () => SetMetadata('isPublic', true);

export class IdParams {
  constructor(id: string) {
    this.id = id;
  }

  @IsMongoId()
  id: string;
}

export const makeFormDataApiBody =
  (props: Record<string, SchemaObject | ReferenceObject>): MethodDecorator =>
  (...args) => {
    ApiBody({
      type: 'multipart/form-data',
      required: true,
      schema: {
        type: 'object',
        properties: props,
      },
    })(...args);
  };

export const ApiFile = (fileName = 'file'): MethodDecorator =>
  makeFormDataApiBody({
    [fileName]: {
      type: 'string',
      format: 'binary',
    },
  });
