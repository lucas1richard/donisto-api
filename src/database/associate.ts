import Contact from 'models/Contact';
import Organization from 'models/Organization';
import Donor from 'models/Donor';
import NewsFeed from 'models/NewsFeed';
import foreignKeys from './foreignKeys';
import OrganizationsContacts from 'models/OrganizationsContacts';
import Cause from 'models/Cause';
import NewsFeedCauses from 'models/NewsFeedCauses';

// Organization.hasMany(Contact, {
//   foreignKey: foreignKeys.ORGANIZATION
// });

const org = { foreignKey: foreignKeys.ORGANIZATION };
const contact = { foreignKey: foreignKeys.CONTACT };
const cause = { foreignKey: foreignKeys.CAUSE };
const newsfeed = { foreignKey: foreignKeys.NEWSFEED };
const thruOrgContacts = {
  through: OrganizationsContacts
};
const thruNewsFeedCauses = {
  through: NewsFeedCauses
};

Contact.belongsToMany(Organization, { ...thruOrgContacts, ...contact });
Organization.belongsToMany(Contact, { ...thruOrgContacts, ...org });

Cause.belongsToMany(NewsFeed, { ...thruNewsFeedCauses, ...cause });
NewsFeed.belongsToMany(Cause, { ...thruNewsFeedCauses, ...newsfeed });

// OrganizationsContacts.hasMany(Organization, {
//   foreignKey: foreignKeys.ORGANIZATION
// });

// OrganizationsContacts.hasMany(Contact, {
//   foreignKey: foreignKeys.CONTACT
// });

Organization.hasMany(NewsFeed, org);
NewsFeed.belongsTo(Organization, org);

Organization.hasMany(Cause, org);
Cause.belongsTo(Organization, org);

Donor.belongsTo(Contact, contact);
