import * as Joi from '@hapi/joi';
import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const CI_CONFIG = {
  isGlobal: true,
  ignoreEnvVars: true,
  load: [
    () => ({
      MONGO_URI: process.env.MONGODB_URI,
    }),
  ],
};

const DEV_CONFIG = {
  isGlobal: true,
  envFilePath: '.env',
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production')
      .default('development'),
    PORT: Joi.number(),
    MONGODB_URI: Joi.string().required(),
    AWS_ACCESS_KEY_ID: Joi.string().required(),
    AWS_SECRET_ACCESS_KEY: Joi.string().required(),
    AWS_UXSTUDIO_BUCKET_NAME: Joi.string().required(),
  }),
};

const CONFIG = process.env.CI ? CI_CONFIG : DEV_CONFIG;

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(CONFIG),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const logger = new Logger('MongooseModule');
        const mongoURI = configService.get('MONGODB_URI');

        logger.debug(`Connecting to DB: ${mongoURI}`);
        return {
          uri: mongoURI,
        };
      },
    }),
  ],
})
export class CoreModule {}
