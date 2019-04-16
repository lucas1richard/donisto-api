import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import CauseAttributes from './types/Attributes';
import { CauseInstance } from './types/CauseInstance';

interface ICauseMethods {
}

interface ICause extends Sequelize.Model<CauseInstance, CauseAttributes>, ICauseMethods {}

const Cause = sequelize.define('cause', attributes, {
}) as ICause;

export default Cause;
