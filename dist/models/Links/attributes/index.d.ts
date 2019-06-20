import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.BigIntDataTypeConstructor;
        autoIncrement: boolean;
    };
    [LinksKeys.UUID]: {
        type: Sequelize.AbstractDataTypeConstructor;
        defaultValue: Sequelize.AbstractDataTypeConstructor;
        primaryKey: boolean;
    };
    [LinksKeys.HREF]: {
        type: Sequelize.TextDataTypeConstructor;
        allowNull: boolean;
    };
    [LinksKeys.DESCRIPTION]: {
        type: Sequelize.TextDataTypeConstructor;
        allowNull: boolean;
    };
    [LinksKeys.LABEL]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
    [LinksKeys.IMAGE]: {
        type: Sequelize.StringDataTypeConstructor;
        allowNull: boolean;
    };
};
export default attributes;
