import NewsFeedKeys from './NewsFeedKeys';
import SeqModel from 'config/database/types/ModelInterface';

interface NewsFeedAttributes extends SeqModel {
  [NewsFeedKeys.UUID]?: string;
  [NewsFeedKeys.TITLE]?: string;
  [NewsFeedKeys.TEXT]?: string;
}

export default NewsFeedAttributes;
