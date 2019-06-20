import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [ContactKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [ContactKeys.FIRST_NAME]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [ContactKeys.LAST_NAME]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [ContactKeys.EMAIL]: {
        type: Sequelize.StringDataTypeConstructor;
        validate: {
            isEmail: boolean;
        };
        unique: boolean;
        allowNull: boolean;
    };
    [ContactKeys.CITY]: {
        type: Sequelize.StringDataTypeConstructor;
    };
    [ContactKeys.STATE]: {
        type: Sequelize.StringDataTypeConstructor;
    };
    [ContactKeys.ZIP]: {
        type: Sequelize.StringDataTypeConstructor;
    };
    [ContactKeys.PASSWORD]: {
        type: Sequelize.TextDataTypeConstructor;
        allowNull: boolean;
    };
    [ContactKeys.SALT]: {
        type: Sequelize.TextDataTypeConstructor;
        allowNull: boolean;
    };
    [ContactKeys.FACEBOOK_ID]: {
        type: Sequelize.TextDataTypeConstructor;
        allowNull: boolean;
    };
};
export default attributes;
