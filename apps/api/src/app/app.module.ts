import { Module } from '@nestjs/common';

import { CoreModule } from '../core.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [CoreModule, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
