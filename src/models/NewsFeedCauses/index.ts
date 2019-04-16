import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import NewsFeedCausesAttributes from './types/Attributes';
import { NewsFeedCausesInstance } from './types/NewsFeedCausesInstance';

interface INewsFeedCausesMethods {
}

interface INewsFeedCauses extends Sequelize.Model<NewsFeedCausesInstance, NewsFeedCausesAttributes>, INewsFeedCausesMethods {}

const NewsFeedCauses = sequelize.define('newsfeedcauses', attributes, {
}) as INewsFeedCauses;

export default NewsFeedCauses;
