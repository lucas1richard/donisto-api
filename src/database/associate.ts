import Contact from 'models/Contact';
import Organization from 'models/Organization';
import Donor from 'models/Donor';
import NewsFeed from 'models/NewsFeed';
import foreignKeys from './foreignKeys';
import OrganizationsContacts from 'models/OrganizationsContacts';

// Organization.hasMany(Contact, {
//   foreignKey: foreignKeys.ORGANIZATION
// });

Contact.belongsToMany(Organization, {
  through: OrganizationsContacts,
  foreignKey: foreignKeys.CONTACT
});

Organization.belongsToMany(Contact, {
  through: OrganizationsContacts,
  foreignKey: foreignKeys.ORGANIZATION
});

// OrganizationsContacts.hasMany(Organization, {
//   foreignKey: foreignKeys.ORGANIZATION
// });

// OrganizationsContacts.hasMany(Contact, {
//   foreignKey: foreignKeys.CONTACT
// });

Organization.hasMany(NewsFeed, {
  foreignKey: foreignKeys.ORGANIZATION
});

NewsFeed.belongsTo(Organization, {
  foreignKey: foreignKeys.ORGANIZATION
});

Donor.belongsTo(Contact, {
  foreignKey: foreignKeys.CONTACT
});
