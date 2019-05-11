import OrganizationKeys from './OrganizationKeys';
import SeqModel from 'config/database/types/ModelInterface';

interface OrganizationAttributes extends SeqModel {
  [OrganizationKeys.UUID]?: string;
  [OrganizationKeys.NAME]: string;
  [OrganizationKeys.CITY]: string;
  [OrganizationKeys.STATE]: string;
  [OrganizationKeys.ZIP]: string;
  [OrganizationKeys.MISSION]: string;
}

export default OrganizationAttributes;
