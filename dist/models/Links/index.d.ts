import Sequelize from 'sequelize';
import LinksAttributes from './types/Attributes';
import { LinksInstance } from './types/LinksInstance';
interface ILinksMethods {
}
interface ILinks extends Sequelize.Model<LinksInstance, LinksAttributes>, ILinksMethods {
}
declare const Links: ILinks;
export default Links;
