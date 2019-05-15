import CauseKeys from './CauseKeys';
import SeqModel from 'config/database/types/ModelInterface';

interface CauseAttributes extends SeqModel {
  [CauseKeys.UUID]?: string;
  [CauseKeys.NAME]?: string;
  [CauseKeys.SUGGESTED_DONATION]?: string;
}

export default CauseAttributes;
