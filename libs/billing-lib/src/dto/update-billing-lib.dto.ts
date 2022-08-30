import { PartialType } from '@nestjs/mapped-types';
import { CreateBillingLibDto } from './create-billing-lib.dto';

export class UpdateBillingLibDto extends PartialType(CreateBillingLibDto) {}
