import Contact from 'models/Contact';
import Organization from 'models/Organization';
import NewsFeed from 'models/NewsFeed';
import foreignKeys from './foreignKeys';
import OrganizationsContacts from 'models/OrganizationsContacts';
import Cause from 'models/Cause';
import NewsFeedCauses from 'models/NewsFeedCauses';
import Donation from 'models/Donation';
import Links from 'models/Links';
import ContactOrgFollows from 'models/ContactOrgFollows';
import ModelAliases from 'models/aliases';

const org = { foreignKey: foreignKeys.ORGANIZATION };
const contact = { foreignKey: foreignKeys.CONTACT };
const cause = { foreignKey: foreignKeys.CAUSE };
const newsfeed = { foreignKey: foreignKeys.NEWSFEED };
const thruOrgContacts = {
  through: OrganizationsContacts
};
const thruOrgContactsFollows = {
  through: ContactOrgFollows
};

const thruNewsFeedCauses = {
  through: NewsFeedCauses
};

Contact.belongsToMany(Organization, { ...thruOrgContacts, ...contact });
Organization.belongsToMany(Contact, { ...thruOrgContacts, ...org });

Contact.belongsToMany(Organization, { ...thruOrgContactsFollows, ...contact, as: ModelAliases.FollowOrganization });
Organization.belongsToMany(Contact, { ...thruOrgContactsFollows, ...org, as: ModelAliases.FollowContacts });

Cause.belongsToMany(NewsFeed, { ...thruNewsFeedCauses, ...cause });
NewsFeed.belongsToMany(Cause, { ...thruNewsFeedCauses, ...newsfeed });

Organization.hasMany(NewsFeed, org);
NewsFeed.belongsTo(Organization, org);

Organization.hasMany(Cause, org);
Cause.belongsTo(Organization, org);

Organization.hasMany(Links, org);
Links.belongsTo(Organization, org);

Contact.hasMany(Donation, contact);
Donation.belongsTo(Contact, contact);

Cause.hasMany(Donation, cause);
Donation.belongsTo(Cause, cause);
