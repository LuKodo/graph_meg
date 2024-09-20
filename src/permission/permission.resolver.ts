import { Resolver } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { Permission } from './entities/permission.entity';

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}
}
