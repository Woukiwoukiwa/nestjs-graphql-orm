import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { TenantModel, TenantInput } from 'src/models/tenant.model';
import { TenantService } from "src/tenant/tenant.service";

@Resolver(of => TenantModel)
export class TenantResolver {
  
  constructor(@Inject(TenantService) private tenantService: TenantService) { }

  @Query(returns => [TenantModel])
  async tenants(): Promise<TenantModel[]> {
    return await this.tenantService.findAll();
  }

  @Mutation(returns => TenantModel)
  async updateTenant(@Args('tenant') tenant: TenantInput): Promise<TenantModel> {
    return await this.tenantService.save(tenant);
  }
}