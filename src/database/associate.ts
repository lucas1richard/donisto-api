import Contact from 'models/Contact';
import Organization from 'models/Organization';
import Donor from 'models/Donor';
import NewsFeed from 'models/NewsFeed';
import foreignKeys from './foreignKeys';
import OrganizationsContacts from 'models/OrganizationsContacts';

// Organization.hasMany(Contact, {
//   foreignKey: foreignKeys.ORGANIZATION
// });

const org = { foreignKey: foreignKeys.ORGANIZATION };
const contact = { foreignKey: foreignKeys.CONTACT };
const thruOrgContacts = {
  through: OrganizationsContacts
};

Contact.belongsToMany(Organization, { ...thruOrgContacts, ...contact });
Organization.belongsToMany(Contact, { ...thruOrgContacts, ...org });

// OrganizationsContacts.hasMany(Organization, {
//   foreignKey: foreignKeys.ORGANIZATION
// });

// OrganizationsContacts.hasMany(Contact, {
//   foreignKey: foreignKeys.CONTACT
// });

Organization.hasMany(NewsFeed, org);
NewsFeed.belongsTo(Organization, org);

Donor.belongsTo(Contact, contact);
