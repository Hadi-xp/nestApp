import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findUser(id:string){
        return id;
    }
}
