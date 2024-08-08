import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  birthdate: string;

  @Column({ unique: true })
  nDni: number;

  @OneToOne(() => Credential)
  @JoinColumn()
  credential: Credential["id"];

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
}
