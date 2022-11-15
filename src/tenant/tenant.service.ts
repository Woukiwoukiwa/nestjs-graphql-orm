import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantModel, TenantInput } from '../models/tenant.model';

@Injectable()
export class TenantService {
    constructor(@InjectRepository(TenantModel) private tenantRepository: Repository<TenantModel>) {}

    async findAll(): Promise<TenantModel[]> {
        return await this.tenantRepository.find();
    }

    async save(tenant: TenantInput): Promise<TenantModel> {
        return await this.tenantRepository.save(tenant);
    }
}
