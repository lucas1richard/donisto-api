import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import CauseAttributes from './types/Attributes';
import { CauseInstance } from './types/CauseInstance';

interface ICauseMethods {
}

interface ICause extends Sequelize.Model<CauseInstance, CauseAttributes>, ICauseMethods {}

export type ICauseModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): CauseInstance;
};

const Cause = <ICauseModel>sequelize.define('cause', attributes, {
});

export default Cause;
