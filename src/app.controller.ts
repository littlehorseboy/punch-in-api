import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PunchIn } from './punchIn.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPunchInList(): PunchIn[] {
    return this.appService.getHello();
  }
}
