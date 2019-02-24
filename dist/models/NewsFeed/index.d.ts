import Sequelize from 'sequelize';
import NewsFeedAttributes from './types/Attributes';
import { NewsFeedInstance } from './types/NewsFeedInstance';
interface INewsFeedMethods {
}
interface INewsFeed extends Sequelize.Model<NewsFeedInstance, NewsFeedAttributes>, INewsFeedMethods {
}
declare const NewsFeed: INewsFeed;
export default NewsFeed;
