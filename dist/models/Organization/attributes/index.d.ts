import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [OrganizationKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [OrganizationKeys.NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [OrganizationKeys.CITY]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [OrganizationKeys.STATE]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [OrganizationKeys.MISSION]: {
        type: Sequelize.DataTypeText;
        allowNull: boolean;
    };
    [OrganizationKeys.ZIP]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
};
export default attributes;
