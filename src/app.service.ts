import { Injectable } from '@nestjs/common';
import { format, subDays } from 'date-fns';

import { PunchIn } from './punchIn.model';

@Injectable()
export class AppService {
  getHello(): PunchIn[] {
    const date = new Date();

    const subOneDayDate = subDays(date, 1);

    return [
      {
        date: `${Number(format(subOneDayDate, 'yyyy')) - 1911}${format(subOneDayDate, 'MMdd')}`,
        time: '0750',
        periodsOfTheDay: 'morning',
      },
      {
        date: `${Number(format(subOneDayDate, 'yyyy')) - 1911}${format(subOneDayDate, 'MMdd')}`,
        time: '1850',
        periodsOfTheDay: 'afternoon',
      },
    ];
  }
}
