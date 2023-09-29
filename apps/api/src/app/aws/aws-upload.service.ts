import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { generateToken } from './utils';

@Injectable()
export class AwsUploadService {
  logger = new Logger('AwsUploadService');

  constructor(private readonly configService: ConfigService) {}

  uploadPublicProfileDocument(dataBuffer: Buffer, filename: string) {
    console.log(this.configService.get('AWS_UXSTUDIO_BUCKET_NAME'));
    const bucket = this.configService.get('AWS_UXSTUDIO_BUCKET_NAME');
    return this.uploadFile(dataBuffer, filename, bucket);
  }

  private async uploadFile(
    dataBuffer: Buffer,
    filename: string,
    bucket: string
  ): Promise<S3.ManagedUpload.SendData> {
    const env = this.configService.get('NODE_ENV');

    if (env === 'test') {
      this.logger.debug(`Using MOCK upload: ${filename} -> ${bucket}`);
      return {
        Location: 'Location',
        Key: 'Key',
        ETag: 'ETag',
        Bucket: 'Bucket',
      };
    }

    this.logger.debug(`Uploading S3: ${filename} -> ${bucket}`);
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: bucket,
        Body: dataBuffer,
        Key: `${generateToken()}-${filename}`,
      })
      .promise();

    return uploadResult;
  }
}
