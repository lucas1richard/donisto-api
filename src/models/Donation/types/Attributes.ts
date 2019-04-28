import DonationKeys from './DonationKeys';
import SeqModel from 'config/database/types/ModelInterface';

interface DonationAttributes extends SeqModel {
  [DonationKeys.UUID]?: string;
  [DonationKeys.AMOUNT]: number;
}

export default DonationAttributes;
