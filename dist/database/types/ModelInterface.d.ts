import { Moment } from 'moment';
interface SeqModel {
    id?: string;
    createdAt?: Moment;
    updatedAt?: Moment;
    deletedAt?: Moment;
}
export default SeqModel;
