import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config, SharedIniFileCredentials } from 'aws-sdk';
import compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);

  app
    .setGlobalPrefix('api')
    .use(helmet())
    .use(compression())
    .useGlobalPipes(new ValidationPipe({ transform: true }))
    .enableCors();

  config.credentials = new SharedIniFileCredentials({ profile: 'default' });

  config.update({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    region: 'eu-central-1',
    signatureVersion: 'v4',
  });

  const options = new DocumentBuilder()
    .setTitle('UXSTUDIO CHALLANGE API')
    .setDescription('UXSTUDIO CHALLANGE API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = configService.get('PORT') || 4201;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/api');
  });
}

bootstrap();
