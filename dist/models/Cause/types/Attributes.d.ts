import CauseKeys from './CauseKeys';
import SeqModel from 'config/database/types/ModelInterface';
interface CauseAttributes extends SeqModel {
    [CauseKeys.UUID]?: string;
    [CauseKeys.NAME]?: string;
}
export default CauseAttributes;
