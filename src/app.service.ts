import { Injectable } from '@nestjs/common';
import { PunchIn } from './punchIn.model';

@Injectable()
export class AppService {
  getHello(): PunchIn[] {
    return [
      {
        date: '1090618',
        time: '0750',
        periodsOfTheDay: 'morning',
      },
      {
        date: '1090618',
        time: '1850',
        periodsOfTheDay: 'afternoon',
      },
    ];
  }
}
