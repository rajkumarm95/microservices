import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersLibDto } from './create-orders-lib.dto';

export class UpdateOrdersLibDto extends PartialType(CreateOrdersLibDto) {}
