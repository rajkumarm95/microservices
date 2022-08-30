import { RmqContext } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingLibService {
  async handleEvent(data: any, context: RmqContext) {
    console.log({ msg: 'microservoce working', data, context });

    //business logic goes here
    return;
  }
}
