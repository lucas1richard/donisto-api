import OrganizationKeys from './OrganizationKeys';
import SeqModel from 'config/database/types/ModelInterface';
interface OrganizationAttributes extends SeqModel {
    [OrganizationKeys.UUID]?: string;
    [OrganizationKeys.NAME]: string;
}
export default OrganizationAttributes;
