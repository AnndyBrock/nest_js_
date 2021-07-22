import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item.dto";
import {ItemsService} from "./items.service";
import {ItemInterface} from "./interfaces/item.interface";

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}

    @Get()
    findAll():ItemInterface[]{
        return this.itemService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): ItemInterface{
        return this.itemService.findOne(id)
    }

    @Put(':id')
    put(@Body () dto:CreateItemDto, @Param('id')id):string{
        return `${id} and ${dto.name}`
    }

    @Delete(':id')
    delete(@Param('id') id):string{
        return `${id}`
    }

    @Post()
    create(@Body() dto:CreateItemDto): string{
        return ``
    }
}
