import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import LinksAttributes from './types/Attributes';
import { LinksInstance } from './types/LinksInstance';

interface ILinksMethods {
}

interface ILinks extends Sequelize.Model<LinksInstance, LinksAttributes>, ILinksMethods {}

export type ILinksModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): LinksInstance;
};

const Links = <ILinksModel>sequelize.define('links', attributes, {
});

export default Links;
