import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [OrganizationKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [OrganizationKeys.NAME]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [OrganizationKeys.CITY]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [OrganizationKeys.STATE]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [OrganizationKeys.MISSION]: {
        type: Sequelize.TextDataTypeConstructor;
        allowNull: boolean;
    };
    [OrganizationKeys.ZIP]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
};
export default attributes;
