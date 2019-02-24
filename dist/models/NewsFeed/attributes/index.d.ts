import Sequelize from 'sequelize';
declare const attributes: {
    id: {
        type: Sequelize.DataTypeBigInt;
        autoIncrement: boolean;
    };
    [NewsFeedKeys.UUID]: {
        type: Sequelize.DataTypeUUID;
        defaultValue: Sequelize.DataTypeUUIDv4;
        primaryKey: boolean;
    };
    [NewsFeedKeys.TITLE]: {
        type: Sequelize.DataTypeString;
    };
    [NewsFeedKeys.TEXT]: {
        type: Sequelize.DataTypeText;
    };
};
export default attributes;
