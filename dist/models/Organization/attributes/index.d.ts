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
};
export default attributes;
