import OrganizationsContactsKeys from './OrganizationsContactsKeys';
import SeqModel from 'config/database/types/ModelInterface';
import foreignKeys from 'config/database/foreignKeys';
interface OrganizationsContactsAttributes extends SeqModel {
    [OrganizationsContactsKeys.UUID]?: string;
    [foreignKeys.ORGANIZATION]?: string;
}
export default OrganizationsContactsAttributes;
