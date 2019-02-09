import Joi from 'joi';

export enum foreignKeys {
  CONTACT = 'contact_uuid',
  DONOR = 'donor_uuid',
  ORGANIZATION = 'organization_uuid'
}

export default foreignKeys;
