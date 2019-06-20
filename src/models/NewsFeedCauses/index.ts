import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import NewsFeedCausesAttributes from './types/Attributes';
import { NewsFeedCausesInstance } from './types/NewsFeedCausesInstance';

interface INewsFeedCausesMethods {
}

interface INewsFeedCauses extends Sequelize.Model<NewsFeedCausesInstance, NewsFeedCausesAttributes>, INewsFeedCausesMethods {}

export type INewsFeedCausesModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): NewsFeedCausesInstance;
};

const NewsFeedCauses = <INewsFeedCausesModel>sequelize.define('newsfeedcauses', attributes, {
});

export default NewsFeedCauses;
