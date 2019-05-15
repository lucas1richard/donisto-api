import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [LinksKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [LinksKeys.HREF]: {
        type: Sequelize.DataTypeText;
        allowNull: boolean;
    };
    [LinksKeys.DESCRIPTION]: {
        type: Sequelize.DataTypeText;
        allowNull: boolean;
    };
    [LinksKeys.LABEL]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
    [LinksKeys.IMAGE]: {
        type: Sequelize.DataTypeString;
        allowNull: boolean;
    };
};
export default attributes;
