import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthLibDto } from './create-auth-lib.dto';

export class UpdateAuthLibDto extends PartialType(CreateAuthLibDto) {}
