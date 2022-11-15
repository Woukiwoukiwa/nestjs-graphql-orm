import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModel } from 'src/models/tenant.model';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { TenantResolver } from './tenant.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([TenantModel]),
  ],
  controllers: [TenantController],
  providers: [TenantService, TenantResolver],
})
@Global()
export class TenantModule {}
