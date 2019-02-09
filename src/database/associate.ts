import Contact from 'models/Contact';
import Organization from 'models/Organization';
import Donor from 'models/Donor';
import foreignKeys from './foreignKeys';

Organization.hasMany(Contact, {
  foreignKey: foreignKeys.ORGANIZATION
});

Contact.belongsToMany(Organization, {
  through: 'OrganizationContacts',
  foreignKey: foreignKeys.CONTACT
});

Organization.belongsToMany(Contact, {
  through: 'OrganizationContacts',
  foreignKey: foreignKeys.ORGANIZATION
});

Donor.belongsTo(Contact, {
  foreignKey: foreignKeys.CONTACT
});
