import Sequelize from 'sequelize';
import CauseAttributes from './types/Attributes';
import { CauseInstance } from './types/CauseInstance';
interface ICauseMethods {
}
interface ICause extends Sequelize.Model<CauseInstance, CauseAttributes>, ICauseMethods {
}
declare const Cause: ICause;
export default Cause;
