import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import LinksAttributes from './types/Attributes';
import { LinksInstance } from './types/LinksInstance';

interface ILinksMethods {
}

interface ILinks extends Sequelize.Model<LinksInstance, LinksAttributes>, ILinksMethods {}

const Links = sequelize.define('links', attributes, {
}) as ILinks;

export default Links;
