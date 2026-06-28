import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  showMsg(@Param('id') id: string) {
    return { message: id };
  }
  @Put(':id')
  plusId(@Param('id') id: string) {
    return { method: 'put', id };
  }
}
