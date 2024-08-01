import { Controller, Get, Post, Body } from '@nestjs/common'
import { FruitsService } from './fruits.service'
import { CreateFruitDto } from './create-fruit.dto'

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Post()
  create(@Body() createFruitDto: CreateFruitDto) {
    return this.fruitsService.create(createFruitDto)
  }

  @Get()
  findAll() {
    return this.fruitsService.findAll()
  }

  @Post('identify')
  identifyFruit(@Body() characteristics: any) {
    return this.fruitsService.identifyFruit(characteristics)
  }
}
