import NewsFeedCausesKeys from './NewsFeedCausesKeys';
import SeqModel from 'config/database/types/ModelInterface';
import foreignKeys from 'config/database/foreignKeys';

interface NewsFeedCausesAttributes extends SeqModel {
  [NewsFeedCausesKeys.UUID]?: string;
  [foreignKeys.ORGANIZATION]?: string;
}

export default NewsFeedCausesAttributes;
