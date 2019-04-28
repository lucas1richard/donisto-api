import Sequelize from 'sequelize';
import NewsFeedCausesAttributes from './types/Attributes';
import { NewsFeedCausesInstance } from './types/NewsFeedCausesInstance';
interface INewsFeedCausesMethods {
}
interface INewsFeedCauses extends Sequelize.Model<NewsFeedCausesInstance, NewsFeedCausesAttributes>, INewsFeedCausesMethods {
}
declare const NewsFeedCauses: INewsFeedCauses;
export default NewsFeedCauses;
