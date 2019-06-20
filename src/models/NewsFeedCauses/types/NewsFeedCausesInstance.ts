import * as Sequelize from 'sequelize';
import NewsFeedCausesAttributes from './Attributes';

interface NewsFeedCausesInstanceMethods {
}

export interface NewsFeedCausesPrototype {
  prototype: NewsFeedCausesInstanceMethods;
}

export interface NewsFeedCausesInstance extends Sequelize.Model<NewsFeedCausesAttributes>, NewsFeedCausesInstanceMethods, NewsFeedCausesAttributes {
}