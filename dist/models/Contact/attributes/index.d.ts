import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [ContactKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [ContactKeys.FIRST_NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [ContactKeys.LAST_NAME]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [ContactKeys.EMAIL]: {
        type: Sequelize.DataTypeString;
        validate: {
            isEmail: boolean;
        };
        unique: boolean;
        allowNull: boolean;
    };
    [ContactKeys.CITY]: {
        type: Sequelize.DataTypeString;
    };
    [ContactKeys.STATE]: {
        type: Sequelize.DataTypeString;
    };
    [ContactKeys.ZIP]: {
        type: Sequelize.DataTypeString;
    };
    [ContactKeys.PASSWORD]: {
        type: Sequelize.DataTypeText;
        allowNull: boolean;
    };
    [ContactKeys.SALT]: {
        type: Sequelize.DataTypeText;
        allowNull: boolean;
    };
    [ContactKeys.FACEBOOK_ID]: {
        type: Sequelize.DataTypeText;
        allowNull: boolean;
    };
};
export default attributes;
