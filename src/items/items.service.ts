import { Injectable } from '@nestjs/common';
import {ItemInterface} from "./interfaces/item.interface";

@Injectable()
export class ItemsService {
    private readonly items:ItemInterface[] = [{
        id:"23343",
        name:"dsd",
        qty:4333
    },{
        id:"233443",
        name:"dsdfdd",
        qty:4332
    }]

    findAll():ItemInterface[]{
        return this.items;
    }

    findOne(id:string):ItemInterface{
        return this.items.find(item=> item.id===id)
    }

}
