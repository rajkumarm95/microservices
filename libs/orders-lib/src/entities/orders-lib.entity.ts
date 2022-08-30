import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class OrdersLib {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: number;
}
