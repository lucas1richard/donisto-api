import Sequelize from 'sequelize';
import { LinksInstance } from './types/LinksInstance';
export declare type ILinksModel = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): LinksInstance;
};
declare const Links: ILinksModel;
export default Links;
