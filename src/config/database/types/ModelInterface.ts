import { Moment } from 'moment';

interface SeqModel {
  id?: number;
  createdAt?: Moment;
  updatedAt?: Moment;
  deletedAt?: Moment;
}

export default SeqModel;
