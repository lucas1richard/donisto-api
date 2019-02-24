import OrganizationsContactsKeys from './OrganizationsContactsKeys';
import SeqModel from 'config/database/types/ModelInterface';
interface OrganizationsContactsAttributes extends SeqModel {
    [OrganizationsContactsKeys.UUID]?: string;
}
export default OrganizationsContactsAttributes;
