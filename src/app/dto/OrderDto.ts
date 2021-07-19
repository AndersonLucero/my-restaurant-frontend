import { OrderDetailsDto } from './OrderDetailDto';
export class OrderDto {

      public id?: number;
      // eslint-disable-next-line id-blacklist
      public number?: string;
      public client?: string;
      public total?: number;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      public date_order?: Date;

      public details?: OrderDetailsDto[];

}
