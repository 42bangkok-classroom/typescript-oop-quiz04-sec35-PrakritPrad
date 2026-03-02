
import { Controller, Get } from '@nestjs/common';

@Controller('user/test')
export class CatsController {
  @Get()
  test(): string[] {
    return [];
  }
}
