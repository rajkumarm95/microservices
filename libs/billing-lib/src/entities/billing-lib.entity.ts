import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BillingLib {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  billingNumber: number;
}
