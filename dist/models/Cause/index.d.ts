import Sequelize from 'sequelize';
import { CauseInstance } from './types/CauseInstance';
export declare type ICauseModel = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): CauseInstance;
};
declare const Cause: ICauseModel;
export default Cause;
