import { Body, Controller, Get, Put } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { TenantModel } from 'src/models/tenant.model';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
    
    constructor(private tenantService: TenantService) {}

    @Get()
    async GetTenants(): Promise<TenantModel[]> {
        return await this.tenantService.findAll();
    }

    @Put()
    @ApiBody({ type: TenantModel })
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: TenantModel})
    async UpdateTenant(@Body() tenant: TenantModel): Promise<TenantModel> {
        return await this.tenantService.save(tenant);
    }
}