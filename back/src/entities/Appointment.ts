import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "appointments"})
export class Appointment {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;
  
  @Column()
  time: string;
  
  @Column()
  status: "active" | "cancelled";

  @ManyToOne(()=> User, (user)=> user.appointments)
  user: User["id"];
  // @JoinColumn({ name: "userId" })
  //       userId: User;
}

