import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export const UserRepository= AppDataSource.getRepository(User).extend({
 findById: async function(id: number):Promise<User> {
    const user = await this.findOneBy({id});
    if(user){
        return user;
    } 
    else throw new Error('User not FOUND!');
    },
    checkById: async function(id: number):Promise<boolean> {
        const user = await this.findById(id);
        return !!user;
    },
});  

